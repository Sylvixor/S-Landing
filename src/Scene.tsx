import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { createEffects } from './Effects';
import { UI } from './UI';
import { setupEventHandlers } from './events';

const calculateDimensions = () => {
  const windowAspect = window.innerWidth / window.innerHeight;
  const targetAspect = 16 / 9;
  
  let width, height;
  
  if (windowAspect > targetAspect) {
    // Window is wider than 16:9, so fit to height
    height = window.innerHeight;
    width = height * targetAspect;
  } else {
    // Window is taller than 16:9, so fit to width
    width = window.innerWidth;
    height = width / targetAspect;
  }
  
  return { width, height };
};

// Center the canvas element within the viewport
const updateCanvasPosition = (canvas: HTMLElement) => {
  const { width, height } = calculateDimensions();
  
  // Apply centering styles
  canvas.style.position = 'absolute';
  canvas.style.left = '50%';
  canvas.style.top = '50%';
  canvas.style.transform = 'translate(-50%, -50%)';
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
};

// Main Scene Component
const Scene: React.FC = () => {
  // Reference to the DOM element that will contain the Three.js canvas
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Early return if mount point is not available
    if (!mountRef.current) return;

    // Initialize Three.js WebGL renderer with antialiasing and transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Calculate initial render dimensions
    let { width: renderWidth, height: renderHeight } = calculateDimensions();
    renderer.setSize(renderWidth, renderHeight);
    
    // Attach renderer canvas to the DOM
    mountRef.current.appendChild(renderer.domElement);

    // Video setup
    const video = document.createElement('video');
    video.src = '/BG.mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = 'anonymous';
    video.preload = 'auto';

    // Attempt to play the video with error handling
    const playVideo = () => {
      video.play().catch(err => console.warn('Video playback failed:', err));
    };

    // Handle video ready state
    video.oncanplaythrough = () => {
      playVideo();
      const loadingOverlay = document.getElementById('loading-overlay');
      if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
      }
    };

    // Create Three.js video texture
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.generateMipmaps = false;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    // Initialize UI system and effects
    const ui = new UI();
    const effects = createEffects(videoTexture, ui);
    scene.add(effects);

    // Setup event handlers for user interactions
    const { cleanup, updateHoverProgress } = setupEventHandlers(renderer, ui);

    updateCanvasPosition(renderer.domElement);

    // Window Resize Handler
    const handleResize = () => {
      const { width, height } = calculateDimensions();
      renderWidth = width;
      renderHeight = height;
      
      // Update renderer size
      renderer.setSize(width, height);
      
      // Update shader uniforms with new dimensions
      const material = (effects as THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>).material;
      if (material) {
        material.uniforms.u_aspect.value = 16 / 9; // Always maintain 16:9 for shader
        material.uniforms.u_resolution.value.set(renderWidth, renderHeight);
      }
      
      updateCanvasPosition(renderer.domElement);
    };

    // Register resize event listener
    window.addEventListener('resize', handleResize);

    // Initialize Three.js clock for animation timing
    const clock = new THREE.Clock();

    // Animation Loop
    const animate = () => {
      console.log('Animation loop running...');
      
      // Get elapsed time for shader animations
      const elapsedTime = clock.getElapsedTime();
      
      // Update shader time uniform
      const material = (effects as THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>).material;
      if (material) {
        material.uniforms.u_time.value = elapsedTime;
      }

      // Attempt to resume video playback if it gets paused
      if (video.paused) {
        playVideo();
      }

      // Update UI hover animations and mark texture for update if needed
      if (updateHoverProgress()) {
        material.uniforms.u_combinedTexture.value.needsUpdate = true;
      }
      
      renderer.render(scene, camera);
      
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup Function
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      videoTexture.dispose();
      renderer.dispose();
      
      cleanup();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Scene;