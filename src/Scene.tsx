import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { createEffects } from './Effects';
import { UI } from './UI';
import { setupEventHandlers } from './events';

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

// Center the canvas
const updateCanvasPosition = (canvas: HTMLElement) => {
  const { width, height } = calculateDimensions();
  canvas.style.position = 'absolute';
  canvas.style.left = '50%';
  canvas.style.top = '50%';
  canvas.style.transform = 'translate(-50%, -50%)';
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
};

const Scene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    let { width: renderWidth, height: renderHeight } = calculateDimensions();
    renderer.setSize(renderWidth, renderHeight);
    mountRef.current.appendChild(renderer.domElement);

    const video = document.createElement('video');
    video.src = '/BG.mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = 'anonymous';
    video.preload = 'auto';
    const playVideo = () => {
      video.play().catch(err => console.warn('Video playback failed:', err));
    };

    video.oncanplaythrough = () => {
      playVideo();
      const loadingOverlay = document.getElementById('loading-overlay');
      if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
      }
    };

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.generateMipmaps = false;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const ui = new UI();
    const effects = createEffects(videoTexture, ui);
    scene.add(effects);

    const { cleanup, updateHoverProgress } = setupEventHandlers(renderer, ui);

    updateCanvasPosition(renderer.domElement);

    const handleResize = () => {
      const { width, height } = calculateDimensions();
      renderWidth = width;
      renderHeight = height;
      renderer.setSize(width, height);
      const material = (effects as THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>).material;
      if (material) {
        material.uniforms.u_aspect.value = 16 / 9; // Always 16:9 for the shader
        material.uniforms.u_resolution.value.set(renderWidth, renderHeight);
      }
      updateCanvasPosition(renderer.domElement);
    };

    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      console.log('Animation loop running...');
      const elapsedTime = clock.getElapsedTime();
      const material = (effects as THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>).material;
      if (material) {
        material.uniforms.u_time.value = elapsedTime;
      }

      // Attempt to resume video playback if paused
      if (video.paused) {
        playVideo();
      }

      if (updateHoverProgress()) {
        material.uniforms.u_combinedTexture.value.needsUpdate = true;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

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