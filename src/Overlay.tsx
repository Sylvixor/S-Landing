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
    
    // Calculate 16:9 dimensions that fit in the current viewport
    const calculateDimensions = () => {
      const windowAspect = window.innerWidth / window.innerHeight;
      const targetAspect = 16 / 9;
      
      let width, height;
      if (windowAspect > targetAspect) {
        // Window is wider than 16:9, fit to height
        height = window.innerHeight;
        width = height * targetAspect;
      } else {
        // Window is taller than 16:9, fit to width
        width = window.innerWidth;
        height = width / targetAspect;
      }
      
      return { width, height };
    };

    let { width: renderWidth, height: renderHeight } = calculateDimensions();
    renderer.setSize(renderWidth, renderHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Center the canvas
    const updateCanvasPosition = () => {
      const canvas = renderer.domElement;
      const { width, height } = calculateDimensions();
      canvas.style.position = 'absolute';
      canvas.style.left = '50%';
      canvas.style.top = '50%';
      canvas.style.transform = 'translate(-50%, -50%)';
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    updateCanvasPosition();

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

    const createCombinedCanvasTexture = (isHovered: boolean = false, hoverProgress: number = 0): THREE.CanvasTexture => {
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

      const paddingX = 16;
      const paddingY = 6;
      const btnWidth = ctx.measureText(buttonText).width + paddingX * 2;
      const btnHeight = 50;
      const btnX = buttonX - paddingX;
      const btnY = buttonY - paddingY / 2;
      const radius = 6;

      // Button background with fill animation
      const fillAlpha = 0.2 + (0.8 * hoverProgress); // Fill more when hovered
      
      // Draw button background (fills up on hover)
      ctx.fillStyle = `rgba(100, 100, 120, ${fillAlpha})`;
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

      // Button border (always visible)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Button text with conditional shadow/stroke and inversion animation
      // Remove shadow and stroke when hovering (when hoverProgress > 0.1)
      if (hoverProgress < 0.1) {
        ctx.shadowColor = "rgba(0,0,0,0.85)";
        ctx.shadowBlur = 6;
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
      } else {
        // Clear shadow and stroke for hovered state
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.lineWidth = 0;
      }
      
      // Invert text color based on hover progress
      // Normal: white text, Hover: black text (inverted)
      const textR = 255 - (255 * hoverProgress);
      const textG = 255 - (255 * hoverProgress);
      const textB = 255 - (255 * hoverProgress);
      
      ctx.fillStyle = `rgb(${textR}, ${textG}, ${textB})`;
      
      // Only apply stroke if not hovered
      if (hoverProgress < 0.1) {
        ctx.strokeText(buttonText, buttonX, buttonY);
      }
      ctx.fillText(buttonText, buttonX, buttonY);

      // Credit text (restore shadow/stroke for credit text)
      ctx.font = "bold 45px 'Courier New', Courier, monospace";
      ctx.shadowColor = "rgba(0,0,0,0.85)";
      ctx.shadowBlur = 6;
      ctx.lineWidth = 3;
      ctx.strokeStyle = "black";
      
      const creditText = "@sylvixor";
      const creditWidth = ctx.measureText(creditText).width;
      const creditX = canvas.width - creditWidth - 60;
      const creditY = canvas.height - 85;
    
      ctx.fillStyle = "white";
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
    let hoverProgress = 0;
    let targetHoverProgress = 0;

    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_texture: { value: videoTexture },
        u_combinedTexture: { value: combinedTexture },
        u_aspect: { value: 16 / 9 }, // Always 16:9
        u_distortionAmount: { value: 0.06 },
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(renderWidth, renderHeight) },
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

          float glitchXOffset = (noise2d(vec2(textUV.y * 100.0, u_time * 35.0)) - 0.5) * 0.002;
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

    // Handle resizing
    const onResize = () => {
      const { width, height } = calculateDimensions();
      renderWidth = width;
      renderHeight = height;
      renderer.setSize(width, height);
      material.uniforms.u_resolution.value.set(width, height);
      updateCanvasPosition();
    };
    window.addEventListener("resize", onResize);

    // Convert screen coordinates to canvas coordinates accounting for 16:9 aspect ratio
    const screenToCanvasCoords = (screenX: number, screenY: number) => {
      const canvas = renderer.domElement;
      const rect = canvas.getBoundingClientRect();
      
      // Get coordinates relative to the canvas
      const canvasX = screenX - rect.left;
      const canvasY = screenY - rect.top;
      
      // Convert to normalized coordinates (0 to 1)
      const normalizedX = canvasX / rect.width;
      const normalizedY = canvasY / rect.height;
      
      // Convert to texture coordinates (1920 x 1080)
      const textureX = normalizedX * 1920;
      const textureY = normalizedY * 1080;
      
      return { x: textureX, y: textureY };
    };

    // Check if point is within button bounds (with curve)
    const isInButtonBounds = (canvasX: number, canvasY: number) => {
      const buttonStartX = 160;
      const buttonStartY = 160; 
      const buttonWidth = 185;
      const buttonHeight = 50;
      
      if (canvasX >= buttonStartX && canvasX <= buttonStartX + buttonWidth) {
        const progressAcrossButton = (canvasX - buttonStartX) / buttonWidth;
        const curveFactor = -15;
        const curvedY = buttonStartY + (curveFactor * progressAcrossButton);
        
        return canvasY >= curvedY && canvasY <= curvedY + buttonHeight;
      }
      return false;
    };

    // Enhanced click handler with better Opera GX compatibility
    const handleClick = (event: MouseEvent) => {
      // Prevent event bubbling and default behavior
      event.preventDefault();
      event.stopPropagation();
      
      const { x: canvasX, y: canvasY } = screenToCanvasCoords(event.clientX, event.clientY);
      
      if (isInButtonBounds(canvasX, canvasY)) {
        console.log('Button clicked!', { canvasX, canvasY });
        // Use a more compatible method for opening links
        const link = document.createElement('a');
        link.href = 'https://homebrew.sylvixor.com';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    // Mouse move handler for hover effects
    const handleMouseMove = (event: MouseEvent) => {
      const { x: canvasX, y: canvasY } = screenToCanvasCoords(event.clientX, event.clientY);
      const inBounds = isInButtonBounds(canvasX, canvasY);
      
      if (inBounds !== isHovered) {
        isHovered = inBounds;
        targetHoverProgress = isHovered ? 1 : 0;
        renderer.domElement.style.cursor = isHovered ? 'pointer' : 'default';
      }
    };

    // Add multiple event listeners for better Opera GX compatibility
    const canvas = renderer.domElement;
    canvas.addEventListener('click', handleClick, { passive: false });
    canvas.addEventListener('mousedown', (e) => {
      const { x: canvasX, y: canvasY } = screenToCanvasCoords(e.clientX, e.clientY);
      if (isInButtonBounds(canvasX, canvasY)) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, { passive: false });
    canvas.addEventListener('mouseup', handleClick, { passive: false });
    canvas.addEventListener('mousemove', handleMouseMove);

    let frameId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Smooth hover animation
      const lerpSpeed = 0.1;
      hoverProgress += (targetHoverProgress - hoverProgress) * lerpSpeed;
      
      // Update texture if hover progress changed significantly
      if (Math.abs(hoverProgress - (isHovered ? 1 : 0)) > 0.01) {
        combinedTexture.dispose();
        combinedTexture = createCombinedCanvasTexture(isHovered, hoverProgress);
        material.uniforms.u_combinedTexture.value = combinedTexture;
        material.uniforms.u_combinedTexture.value.needsUpdate = true;
      }

      material.uniforms.u_time.value = time * 0.001;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('mousedown', handleClick);
      canvas.removeEventListener('mouseup', handleClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
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

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        pointerEvents: "auto",
        backgroundColor: "black", // Black letterboxing for non-16:9 screens
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }} 
    />
  );
};

export default Overlay;