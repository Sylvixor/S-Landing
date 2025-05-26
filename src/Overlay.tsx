import { useEffect, useRef } from "react";
import * as THREE from "three";

const Overlay = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const video = document.createElement("video");
    video.src = "/BG.mp4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.play().catch((err) => {
      console.warn("Video playback failed:", err);
    });

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.generateMipmaps = false;

    const createCombinedCanvasTexture = (isHovered: boolean = false): THREE.CanvasTexture => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.CanvasTexture(canvas);

      canvas.width = 1920;
      canvas.height = 1080;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold 45px 'Courier New', Courier, monospace";
      ctx.textBaseline = "top";
      ctx.fillStyle = "white";
      ctx.shadowColor = "rgba(0,0,0,0.85)";
      ctx.shadowBlur = 6;
      ctx.lineWidth = 3;
      ctx.strokeStyle = "black";
      ctx.imageSmoothingEnabled = false;

      // Welcome text
      const welcomeText = "Welcome, see projects below";
      const welcomeX = 60;
      ctx.strokeText(welcomeText, welcomeX, 40);
      ctx.fillText(welcomeText, welcomeX, 30);

      // Line below the welcome text
      ctx.beginPath();
      ctx.moveTo(welcomeX, 90);
      ctx.lineTo(welcomeX + ctx.measureText(welcomeText).width, 90);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.stroke();

      // Button text
      const buttonText = "homebrew";
      ctx.font = "bold 40px 'Courier New', Courier, monospace";
      const buttonX = 75;
      const buttonY = 120;

      ctx.fillStyle = "rgba(100, 100, 120, 0.4)";
      const paddingX = 16;
      const paddingY = 6;
      const btnWidth = ctx.measureText(buttonText).width + paddingX * 2;
      const btnHeight = 50;
      const btnX = buttonX - paddingX;
      const btnY = buttonY - paddingY / 2;
      const radius = 6;

      // Draw button background
      ctx.fillStyle = "rgba(100, 100, 120, 0.4)";
      ctx.shadowColor = "rgba(0,0,0,0.85)";
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.moveTo(btnX + radius, btnY);
      ctx.lineTo(btnX + btnWidth - radius, btnY);
      ctx.quadraticCurveTo(btnX + btnWidth, btnY, btnX + btnWidth, btnY + radius);
      ctx.lineTo(btnX + btnWidth, btnY + btnHeight - radius);
      ctx.quadraticCurveTo(btnX + btnWidth, btnY + btnHeight, btnX + btnWidth - radius, btnY + btnHeight);
      ctx.lineTo(btnX + radius, btnY + btnHeight);
      ctx.quadraticCurveTo(btnX, btnY + btnHeight, btnX, btnY + btnHeight - radius);
      ctx.lineTo(btnX, btnY + radius);
      ctx.quadraticCurveTo(btnX, btnY, btnX + radius, btnY);
      ctx.closePath();
      ctx.fill();

      // Slim white border
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Button text
      ctx.shadowBlur = 6;
      ctx.strokeStyle = "black";
      ctx.fillStyle = isHovered ? "rgba(255, 255, 150, 1.0)" : "white"; // Brighter when hovered
      ctx.strokeText(buttonText, buttonX, buttonY);
      ctx.fillText(buttonText, buttonX, buttonY);

      // Credit text
      ctx.font = "bold 45px 'Courier New', Courier, monospace";
      const creditText = "@sylvixor";
      const creditWidth = ctx.measureText(creditText).width;
      const creditX = canvas.width - creditWidth - 60;
      const creditY = canvas.height - 85;
    
      ctx.strokeText(creditText, creditX, creditY);
      ctx.fillText(creditText, creditX, creditY);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;

      return texture;
    };

    let combinedTexture: THREE.CanvasTexture = createCombinedCanvasTexture();
    let isHovered = false;

    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_texture: { value: videoTexture },
        u_combinedTexture: { value: combinedTexture },
        u_aspect: { value: window.innerWidth / window.innerHeight },
        u_distortionAmount: { value: 0.06 },
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_bloom: { value: 0.8 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D u_texture;
        uniform sampler2D u_combinedTexture;
        uniform float u_aspect;
        uniform float u_distortionAmount;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform float u_bloom;

        // Simple rounded rect function for masking border
        float roundedRectDistance(vec2 pt, vec2 size, float radius) {
          vec2 halfSize = size * 0.5;
          vec2 d = abs(pt) - halfSize + vec2(radius);
          return length(max(d, 0.0)) - radius;
        }

        float noise2d(vec2 uv) {
          return fract(sin(dot(uv.xy, vec2(12.9898,78.233))) * 43758.5453);
        }

        vec3 chromaticAberration(sampler2D tex, vec2 uv, float amount) {
          vec2 center = vec2(0.5);
          vec2 dir = uv - center;
          float dist = length(dir);
          vec2 offset = normalize(dir) * amount * dist;

          float r = texture2D(tex, uv + offset).r;
          float g = texture2D(tex, uv).g;
          float b = texture2D(tex, uv - offset).b;
          return vec3(r, g, b);
        }

        void main() {
          vec2 uv = vUv * 2.0 - 1.0;
          uv.x *= u_aspect;

          float r = length(uv);
          float distortedR = r + u_distortionAmount * pow(r, 3.0);
          vec2 distortedUV = uv * (distortedR / r);

          float dist = roundedRectDistance(distortedUV, vec2(u_aspect * 2.0, 2.0), 0.12);
          if (dist > 0.0) discard;

          vec2 finalUV = distortedUV;
          finalUV.x /= u_aspect;
          finalUV = finalUV * 0.5 + 0.5;

          if (finalUV.x < 0.0 || finalUV.x > 1.0 || finalUV.y < 0.0 || finalUV.y > 1.0) discard;

          float caAmount = 0.007;
          vec3 videoColor = chromaticAberration(u_texture, finalUV, caAmount);
          
          // Add bloom/softness to video
          vec3 bloom = vec3(0.0);
          float bloomRadius = 0.005;
          for(int i = 0; i < 8; i++) {
            float angle = float(i) * 0.785398; // 45 degrees apart
            vec2 offset = vec2(cos(angle), sin(angle)) * bloomRadius;
            bloom += chromaticAberration(u_texture, finalUV + offset, caAmount) * 0.125;
          }
          videoColor = mix(videoColor, bloom, u_bloom * 0.3);
          
          // Make video darker
          videoColor *= 0.5;

          // Draw the combined text+button texture with glitch effect
          vec2 textUV = finalUV;

          float glitchXOffset = (noise2d(vec2(textUV.y * 100.0, u_time * 35.0)) - 0.5) * 0.003;
          float glitchYOffset = (noise2d(vec2(textUV.x * 100.0 + 1000.0, u_time * 25.0)) - 0.5) * 0.002;
          vec2 glitchOffset = vec2(glitchXOffset, glitchYOffset);
          vec2 glitchUV = (textUV + glitchOffset);

          vec4 textSample = texture2D(u_combinedTexture, glitchUV);

          // Mix based on luminance alpha (like before)
          float lum = dot(textSample.rgb, vec3(0.299, 0.587, 0.114));
          float alpha = smoothstep(0.15, 0.65, lum);

          // Glow effect around text
          float glow = 0.0;
          float glowRadius = 0.02;
          glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
          glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
          glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
          glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;

          vec3 textColor = mix(vec3(1.0), vec3(0.6, 0.8, 1.0), glow);

          vec3 finalColor = mix(videoColor, textColor, alpha);

          // Flicker brightness for glitch effect
          float flicker = 0.95 + 0.1 * sin(u_time * 20.0 + textUV.y * 50.0);
          finalColor *= flicker;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Store button dimensions for click detection (now using canvas coordinates directly)
    const buttonBounds = {
      x: 160,
      y: 160, 
      width: 185,
      height: 50
    };

    // Handle resizing
    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      material.uniforms.u_aspect.value = width / height;
      material.uniforms.u_resolution.value.set(width, height);
      material.uniforms.u_combinedTexture.value = createCombinedCanvasTexture();
      material.uniforms.u_combinedTexture.value.needsUpdate = true;
    };
    window.addEventListener("resize", onResize);

    // Function to apply inverse fisheye distortion to click coordinates
    const undistortCoordinates = (x: number, y: number) => {
      const aspect = window.innerWidth / window.innerHeight;
      const distortionAmount = 0.06;
      
      // Convert screen coordinates to normalized UV (-1 to 1)
      let uv = {
        x: (x / window.innerWidth) * 2 - 1,
        y: (y / window.innerHeight) * 2 - 1
      };
      uv.x *= aspect;
      
      // Apply inverse barrel distortion
      const r = Math.sqrt(uv.x * uv.x + uv.y * uv.y);
      if (r > 0) {
        const distortedR = r + distortionAmount * Math.pow(r, 3);
        const scale = r / distortedR;
        uv.x *= scale;
        uv.y *= scale;
      }
      
      // Convert back to screen coordinates
      uv.x /= aspect;
      const screenX = (uv.x * 0.5 + 0.5) * window.innerWidth;
      const screenY = (uv.y * 0.5 + 0.5) * window.innerHeight;
      
      return { x: screenX, y: screenY };
    };

    // Enhanced click handler for homebrew button with curved detection
    const handleClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      
      // Convert to normalized coordinates
      const normalizedX = clickX / window.innerWidth;
      const normalizedY = clickY / window.innerHeight;
      
      // Convert to canvas coordinates
      const canvasX = normalizedX * 1920;
      const canvasY = normalizedY * 1080;
      
      // Button parameters (your working values)
      const buttonStartX = 160;
      const buttonStartY = 160; 
      const buttonWidth = 185;
      const buttonHeight = 50;
      
      // Check if click is within the button's horizontal bounds
      if (canvasX >= buttonStartX && canvasX <= buttonStartX + buttonWidth) {
        // Calculate the expected Y position at this X due to fisheye distortion
        // The button curves upward from left to right
        const progressAcrossButton = (canvasX - buttonStartX) / buttonWidth; // 0 to 1
        
        // Approximate the upward curve - adjust this curve factor to match your visual button
        const curveFactor = -15; // negative because Y increases downward in screen coords
        const curvedY = buttonStartY + (curveFactor * progressAcrossButton);
        
        // Check if click Y is within the curved button bounds
        if (canvasY >= curvedY && canvasY <= curvedY + buttonHeight) {
          console.log('Curved button clicked!'); // Debug log
          window.open('https://homebrew.sylvixor.com', '_blank');
        }
      }
    };

    // Add hover effect with curved detection
    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      // Convert to normalized coordinates
      const normalizedX = mouseX / window.innerWidth;
      const normalizedY = mouseY / window.innerHeight;
      
      // Convert to canvas coordinates
      const canvasX = normalizedX * 1920;
      const canvasY = normalizedY * 1080;
      
      // Button parameters
      const buttonStartX = 160;
      const buttonStartY = 160; 
      const buttonWidth = 185;
      const buttonHeight = 50;
      
      // Check if mouse is within the button's horizontal bounds
      if (canvasX >= buttonStartX && canvasX <= buttonStartX + buttonWidth) {
        // Calculate the expected Y position at this X due to fisheye distortion
        const progressAcrossButton = (canvasX - buttonStartX) / buttonWidth;
        const curveFactor = -15; // Same curve as click detection
        const curvedY = buttonStartY + (curveFactor * progressAcrossButton);
        
        // Check if mouse Y is within the curved button bounds
        if (canvasY >= curvedY && canvasY <= curvedY + buttonHeight) {
          if (!isHovered) {
            isHovered = true;
            // Update texture with hover state
            combinedTexture.dispose();
            combinedTexture = createCombinedCanvasTexture(true);
            material.uniforms.u_combinedTexture.value = combinedTexture;
            material.uniforms.u_combinedTexture.value.needsUpdate = true;
          }
          renderer.domElement.style.cursor = 'pointer';
        } else {
          if (isHovered) {
            isHovered = false;
            // Update texture without hover state
            combinedTexture.dispose();
            combinedTexture = createCombinedCanvasTexture(false);
            material.uniforms.u_combinedTexture.value = combinedTexture;
            material.uniforms.u_combinedTexture.value.needsUpdate = true;
          }
          renderer.domElement.style.cursor = 'default';
        }
      } else {
        if (isHovered) {
          isHovered = false;
          // Update texture without hover state
          combinedTexture.dispose();
          combinedTexture = createCombinedCanvasTexture(false);
          material.uniforms.u_combinedTexture.value = combinedTexture;
          material.uniforms.u_combinedTexture.value.needsUpdate = true;
        }
        renderer.domElement.style.cursor = 'default';
      }
    };

    renderer.domElement.addEventListener('click', handleClick);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    let frameId: number;

    const animate = (time: number) => {
      material.uniforms.u_time.value = time * 0.001;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener('click', handleClick);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      combinedTexture.dispose();
      videoTexture.dispose();
      material.dispose();
      geometry.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "auto" }} />;
};

export default Overlay;