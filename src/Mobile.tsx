import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Mobile: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Calculate responsive dimensions maintaining 16:9 aspect ratio
    const aspect = window.innerWidth / window.innerHeight;
    const targetAspect = 16 / 9;
    
    let w, h;
    if (aspect > targetAspect) {
      // Window is wider than target, fit to height
      h = window.innerHeight;
      w = h * targetAspect;
    } else {
      // Window is taller than target, fit to width
      w = window.innerWidth;
      h = w / targetAspect;
    }
    
    // Scale up for higher resolution rendering
    const width = w * 2.5;
    const height = h * 2.5;

    // Initialize WebGL renderer with antialiasing and transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Style the canvas for centered positioning
    const canvas = renderer.domElement;
    canvas.style.cssText = `
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: ${width}px;
      height: ${height}px;
    `;

    // Create Three.js scene with orthographic camera for 2D rendering
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Create a 2D canvas for UI rendering (text and buttons)
    const uiCanvas = document.createElement('canvas');
    const ctx = uiCanvas.getContext('2d')!;
    uiCanvas.width = 1920;
    uiCanvas.height = 1080;
    
    // Create texture from UI canvas with nearest neighbor filtering for crisp text
    const uiTexture = new THREE.CanvasTexture(uiCanvas);
    uiTexture.minFilter = THREE.NearestFilter;
    uiTexture.magFilter = THREE.NearestFilter;
    uiTexture.generateMipmaps = false;

    // Function to draw UI elements (text and buttons) on the 2D canvas
    const drawUI = () => {
      ctx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
      ctx.font = "bold 80px 'Courier New', monospace";
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const gap = 30;
      const centerX = uiCanvas.width / 2;
      
      // Draw welcome text
      const welcomeLines = ['welcome, see', 'projects below'];
      let currentY = uiCanvas.height / 2 - 200;
      
      welcomeLines.forEach((line, i) => {
        ctx.fillText(line, centerX, currentY + (i * 100));
      });

      currentY += 150 + gap;

      // Draw horizontal separator line
      ctx.beginPath();
      ctx.moveTo(centerX - 300, currentY);
      ctx.lineTo(centerX + 300, currentY);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 4;
      ctx.stroke();

      currentY += gap + 20;

      // Set up button styling
      ctx.font = "bold 70px 'Courier New', monospace";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 3;

      const padding = 30;
      const btnHeight = 110;
      const radius = 10;

      // Helper function to draw a rounded rectangle button
      const drawButton = (text: string, y: number) => {
        const textWidth = ctx.measureText(text).width;
        const btnWidth = textWidth + padding * 2;
        const btnX = centerX - btnWidth / 2;

        // Draw button background with rounded corners
        ctx.save();
        ctx.fillStyle = `rgba(100, 100, 120, 0.8)`;
        ctx.beginPath();
        ctx.roundRect(btnX, y, btnWidth, btnHeight, radius);
        ctx.stroke();
        ctx.restore();

        // Draw button text
        ctx.fillText(text, centerX, y + btnHeight / 2);

        // Return button bounds for click detection
        return {
          x: btnX,
          y: y,
          width: btnWidth,
          height: btnHeight,
        };
      };

      // Draw both buttons and store their bounds
      const homebrewBtn = drawButton('homebrew', currentY);
      const toolsBtn = drawButton('tools', currentY + btnHeight + gap);

      // Mark texture for update to reflect canvas changes
      uiTexture.needsUpdate = true;

      return { homebrew: homebrewBtn, tools: toolsBtn };
    };

    // Initial UI draw and store button bounds for click handling
    const buttonBounds = drawUI();

    // Handle mouse clicks on the canvas
    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Convert screen coordinates to canvas coordinates
      const scaleX = uiCanvas.width / rect.width;
      const scaleY = uiCanvas.height / rect.height;

      const x = (event.clientX - rect.left) * scaleX;
      const y = (event.clientY - rect.top) * scaleY;

      // Check if click is within button bounds
      const isInside = (btn: typeof buttonBounds.homebrew) => 
        x >= btn.x && x <= btn.x + btn.width && 
        y >= btn.y && y <= btn.y + btn.height;

      if (isInside(buttonBounds.homebrew)) {
        window.location.href = 'https://homebrew.sylvixor.com';
      } else if (isInside(buttonBounds.tools)) {
        window.location.href = 'https://tools.sylvixor.com';
      }
    };

    canvas.addEventListener('click', handleClick);

    // Create custom shader material with effects
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_texture: { value: null },
        u_combinedTexture: { value: uiTexture },
        u_aspect: { value: width / height },
        u_distortionAmount: { value: 0.5 },
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(width, height) },
        u_bloom: { value: 0.8 },
        u_brightnessFlicker: { value: 0.04 },
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
        uniform float u_brightnessFlicker;

        // Calculate distance to rounded rectangle
        float roundedRectDistance(vec2 pt, vec2 size, float radius) {
          vec2 halfSize = size * 0.5;
          vec2 d = abs(pt) - halfSize + vec2(radius);
          return length(max(d, 0.0)) - radius;
        }

        // Simple 2D noise function for glitch effects
        float noise2d(vec2 uv) {
          return fract(sin(dot(uv.xy, vec2(12.9898,78.233))) * 43758.5453);
        }

        // Chromatic aberration effect (color channel separation)
        vec3 chromaticAberration(sampler2D tex, vec2 uv, float amount) {
          vec2 center = vec2(0.5);
          vec2 dir = uv - center;
          float dist = length(dir);
          vec2 offset = normalize(dir) * amount * dist;

          // Sample red, green, blue channels with slight offsets
          float r = texture2D(tex, uv + offset).r;
          float g = texture2D(tex, uv).g;
          float b = texture2D(tex, uv - offset).b;
          return vec3(r, g, b);
        }

        void main() {
          // Convert UV coordinates to screen space centered at origin
          vec2 uv = vUv * 2.0 - 1.0;
          uv.x *= u_aspect;

          // Apply barrel distortion for CRT effect
          float r = length(uv);
          float distortedR = r + u_distortionAmount * pow(r, 3.0);
          vec2 distortedUV = uv * (distortedR / r);

          // Clip to rounded rectangle screen shape
          float dist = roundedRectDistance(distortedUV, vec2(u_aspect * 2.0, 2.0), 0.12);
          if (dist > 0.0) discard;

          // Convert back to texture coordinates
          vec2 finalUV = distortedUV;
          finalUV.x /= u_aspect;
          finalUV = finalUV * 0.5 + 0.5;

          // Discard pixels outside texture bounds
          if (finalUV.x < 0.0 || finalUV.x > 1.0 || finalUV.y < 0.0 || finalUV.y > 1.0) discard;

          // Add subtle glitch offset using noise
          float glitchXOffset = (noise2d(vec2(finalUV.y * 100.0, u_time * 35.0)) - 0.5) * 0.002;
          float glitchYOffset = (noise2d(vec2(finalUV.x * 100.0 + 1000.0, u_time * 25.0)) - 0.5) * 0.002;
          vec2 glitchUV = finalUV + vec2(glitchXOffset, glitchYOffset);

          // Sample the UI texture
          vec4 textSample = texture2D(u_combinedTexture, glitchUV);

          // Apply chromatic aberration
          float caAmount = 0.003;
          vec3 processedColor = chromaticAberration(u_combinedTexture, glitchUV, caAmount);

          // Add bloom effect by sampling surrounding pixels
          vec3 bloom = vec3(0.0);
          float bloomRadius = 0.005;
          for(int i = 0; i < 8; i++) {
            float angle = float(i) * 0.785398; // 45 degree increments
            vec2 offset = vec2(cos(angle), sin(angle)) * bloomRadius;
            bloom += chromaticAberration(u_combinedTexture, glitchUV + offset, caAmount) * 0.125;
          }
          processedColor = mix(processedColor, bloom, u_bloom * 0.3);

          // Calculate alpha based on luminance for text rendering
          float lum = dot(textSample.rgb, vec3(0.299, 0.587, 0.114));
          float alpha = smoothstep(0.15, 0.65, lum);

          // Add glow effect around text
          float glow = 0.0;
          float glowRadius = 0.02;
          glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
          glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
          glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
          glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;

          // Mix text color with glow effect
          vec3 textColor = mix(vec3(1.0), vec3(0.6, 0.8, 1.0), glow);
          vec3 finalColor = mix(processedColor, textColor, alpha);

          // Add scanline flicker effect
          float flicker = 0.95 + 0.1 * sin(u_time * 20.0 + finalUV.y * 50.0);
          finalColor *= flicker;

          // Add overall brightness flickering
          finalColor *= (1.0 - u_brightnessFlicker + u_brightnessFlicker * sin(u_time * 100.0));

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      transparent: true,
    });

    // Create plane geometry and mesh for rendering the shader
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Handle window resize to maintain aspect ratio and update shader uniforms
    const handleResize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      const targetAspect = 16 / 9;
      
      let w, h;
      if (aspect > targetAspect) {
        h = window.innerHeight;
        w = h * targetAspect;
      } else {
        w = window.innerWidth;
        h = w / targetAspect;
      }
      
      const width = w * 2.5;
      const height = h * 2.5;

      // Update renderer size and shader uniforms
      renderer.setSize(width, height);
      material.uniforms.u_aspect.value = width / height;
      material.uniforms.u_resolution.value.set(width, height);
      drawUI();
      
      // Update canvas styling
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function for React useEffect
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Mobile;