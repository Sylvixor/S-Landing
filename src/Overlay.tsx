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

    const createCombinedCanvasTexture = (hoveredButton: string | null, homebrewHoverProgress: number, toolsHoverProgress: number): THREE.CanvasTexture => {
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

      // Homebrew button rendering
      ctx.save(); // Save current canvas state
      const homebrewFillAlpha = 0.2 + (0.8 * homebrewHoverProgress);
      ctx.fillStyle = `rgba(100, 100, 120, ${homebrewFillAlpha})`;
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

      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();

      if (homebrewHoverProgress < 0.1) {
        ctx.shadowColor = "rgba(0,0,0,0.85)";
        ctx.shadowBlur = 6;
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
      } else {
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.lineWidth = 0;
      }
      const homebrewTextR = 255 - (255 * homebrewHoverProgress);
      const homebrewTextG = 255 - (255 * homebrewHoverProgress);
      const homebrewTextB = 255 - (255 * homebrewHoverProgress);
      ctx.fillStyle = `rgb(${homebrewTextR}, ${homebrewTextG}, ${homebrewTextB})`;
      if (homebrewHoverProgress < 0.1) {
        ctx.strokeText(buttonText, buttonX, buttonY);
      }
      ctx.fillText(buttonText, buttonX, buttonY);
      ctx.restore(); // Restore canvas state

      // Second button (tools) rendering
      ctx.save(); // Save current canvas state
      const buttonText2 = "tools";
      const buttonY2 = buttonY + btnHeight + 20; // Position below the first button

      const btnWidth2 = ctx.measureText(buttonText2).width + paddingX * 2;
      const btnX2 = buttonX - paddingX;
      const btnY2 = buttonY2 - paddingY / 2;

      const toolsFillAlpha = 0.2 + (0.8 * toolsHoverProgress);
      ctx.fillStyle = `rgba(100, 100, 120, ${toolsFillAlpha})`;
      ctx.beginPath();
      ctx.moveTo(btnX2 + radius, btnY2);
      ctx.lineTo(btnX2 + btnWidth2 - radius, btnY2);
      ctx.quadraticCurveTo(btnX2 + btnWidth2, btnY2, btnX2 + btnWidth2, btnY2 + radius);
      ctx.lineTo(btnX2 + btnWidth2, btnY2 + btnHeight - radius);
      ctx.quadraticCurveTo(btnX2 + btnWidth2, btnY2 + btnHeight, btnX2 + btnWidth2 - radius, btnY2 + btnHeight);
      ctx.lineTo(btnX2 + radius, btnY2 + btnHeight);
      ctx.quadraticCurveTo(btnX2, btnY2 + btnHeight, btnX2, btnY2 + btnHeight - radius);
      ctx.lineTo(btnX2, btnY2 + radius);
      ctx.quadraticCurveTo(btnX2, btnY2, btnX2 + radius, btnY2);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();

      if (toolsHoverProgress < 0.1) {
        ctx.shadowColor = "rgba(0,0,0,0.85)";
        ctx.shadowBlur = 6;
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
      } else {
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.lineWidth = 0;
      }
      const toolsTextR = 255 - (255 * toolsHoverProgress);
      const toolsTextG = 255 - (255 * toolsHoverProgress);
      const toolsTextB = 255 - (255 * toolsHoverProgress);
      ctx.fillStyle = `rgb(${toolsTextR}, ${toolsTextG}, ${toolsTextB})`;
      if (toolsHoverProgress < 0.1) {
        ctx.strokeText(buttonText2, buttonX, buttonY2);
      }
      ctx.fillText(buttonText2, buttonX, buttonY2);
      ctx.restore(); // Restore canvas state

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

    let combinedTexture: THREE.CanvasTexture = createCombinedCanvasTexture(null, 0, 0);
    let hoveredButton: string | null = null;
    let homebrewHoverProgress = 0;
    let toolsHoverProgress = 0;
    let targetHomebrewHoverProgress = 0;
    let targetToolsHoverProgress = 0;

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
      const visualPaddingX = 16; // This is the visual padding for the button
      const clickableAreaHorizontalPadding = 0; // New variable for clickable area horizontal padding
      const paddingY = 6;
      const btnHeight = 50; // Fixed height for both buttons
      const radius = 6; // Button corner radius

      // Create a temporary canvas context to measure text widths
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return null;
      tempCtx.font = "bold 40px 'Courier New', Courier, monospace"; // Must match the font used in createCombinedCanvasTexture

      const buttonTextHomebrew = "homebrew";
      const buttonTextTools = "tools";

      // Clickable area base coordinates (independent of visual button position)
      const clickableButtonX = 160; // Current value
      const clickableButtonY = 170; // Current value
      const toolsClickableAreaXOffset = 10; // New offset for tools button clickable area

      // Homebrew button dimensions and position for clickable area
      const homebrewClickableAreaXOffset = 13; // New offset for homebrew button clickable area
      const btnWidthHomebrew = tempCtx.measureText(buttonTextHomebrew).width + clickableAreaHorizontalPadding * 2 - 14; // Adjusted for homebrew
      const homebrewBtnX = clickableButtonX - clickableAreaHorizontalPadding + homebrewClickableAreaXOffset;
      const homebrewBtnY = clickableButtonY - paddingY / 2;

      // Tools button dimensions and position for clickable area
      const toolsClickableAreaYOffset = -5; // New offset for tools button clickable area
      const buttonY2Offset = btnHeight + 20; // Offset for the second button
      const btnWidthTools = tempCtx.measureText(buttonTextTools).width + clickableAreaHorizontalPadding * 2;
      const toolsBtnX = clickableButtonX - clickableAreaHorizontalPadding + toolsClickableAreaXOffset;
      const toolsBtnY = clickableButtonY + buttonY2Offset - paddingY / 2 + toolsClickableAreaYOffset;

      const curveFactor = -15; // Re-introducing the curve factor

      // Check homebrew button
      if (canvasX >= homebrewBtnX && canvasX <= homebrewBtnX + btnWidthHomebrew) {
        const progressAcrossButton = (canvasX - homebrewBtnX) / btnWidthHomebrew;
        const curvedY = homebrewBtnY + (curveFactor * progressAcrossButton);
        if (canvasY >= curvedY && canvasY <= curvedY + btnHeight) {
          return "homebrew";
        }
      }

      // Check tools button
      if (canvasX >= toolsBtnX && canvasX <= toolsBtnX + btnWidthTools) {
        const progressAcrossButton = (canvasX - toolsBtnX) / btnWidthTools;
        const curvedY = toolsBtnY + (curveFactor * progressAcrossButton);
        if (canvasY >= curvedY && canvasY <= curvedY + btnHeight) {
          return "tools";
        }
      }

      return null;
    };

    // Enhanced click handler with better Opera GX compatibility
    const handleClick = (event: MouseEvent) => {
      // Prevent event bubbling and default behavior
      event.preventDefault();
      event.stopPropagation();
      
      const { x: canvasX, y: canvasY } = screenToCanvasCoords(event.clientX, event.clientY);
      
      const clickedButton = isInButtonBounds(canvasX, canvasY);

      if (clickedButton) {
        console.log(`${clickedButton} button clicked!`, { canvasX, canvasY });
        const link = document.createElement('a');
        if (clickedButton === "homebrew") {
          link.href = 'https://homebrew.sylvixor.com';
        } else if (clickedButton === "tools") {
          link.href = 'https://tools.sylvixor.com';
        }
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    // Mouse move handler for hover effects
    // Mouse move handler for hover effects
    const handleMouseMove = (event: MouseEvent) => {
      const { x: canvasX, y: canvasY } = screenToCanvasCoords(event.clientX, event.clientY);
      const currentHoveredButton = isInButtonBounds(canvasX, canvasY);
      
      if (currentHoveredButton !== hoveredButton) {
        hoveredButton = currentHoveredButton;

        targetHomebrewHoverProgress = (hoveredButton === "homebrew") ? 1 : 0;
        targetToolsHoverProgress = (hoveredButton === "tools") ? 1 : 0;

        renderer.domElement.style.cursor = hoveredButton ? 'pointer' : 'default';
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
      homebrewHoverProgress += (targetHomebrewHoverProgress - homebrewHoverProgress) * lerpSpeed;
      toolsHoverProgress += (targetToolsHoverProgress - toolsHoverProgress) * lerpSpeed;
      
      // Update texture if hover progress changed significantly for either button
      if (Math.abs(homebrewHoverProgress - targetHomebrewHoverProgress) > 0.01 ||
          Math.abs(toolsHoverProgress - targetToolsHoverProgress) > 0.01) {
        combinedTexture.dispose();
        combinedTexture = createCombinedCanvasTexture(hoveredButton, homebrewHoverProgress, toolsHoverProgress);
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