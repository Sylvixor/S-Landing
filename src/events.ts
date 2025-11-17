import * as THREE from 'three';
import { UI } from './components/UI';
import { buttons } from './config';

export function setupEventHandlers(
  renderer: THREE.WebGLRenderer,
  ui: UI,
) {
  // State variables to manage button hover and animation progress
  let hoveredButton: string | null = null;
  const buttonHoverProgresses = new Array(buttons.length).fill(0);
  const targetButtonHoverProgresses = new Array(buttons.length).fill(0);

  const screenToCanvasCoords = (screenX: number, screenY: number) => {
    const canvas = renderer.domElement;
    const rect = canvas.getBoundingClientRect();
    
    // Convert to canvas-relative coordinates
    const canvasX = screenX - rect.left;
    const canvasY = screenY - rect.top;
    
    // Normalize to 0-1 range
    const normalizedX = canvasX / rect.width;
    const normalizedY = canvasY / rect.height;
    
    // Scale to texture dimensions (1920x1080)
    const textureX = normalizedX * 1920;
    const textureY = normalizedY * 1080;
    
    return { x: textureX, y: textureY };
  };



  const isInButtonBounds = (canvasX: number, canvasY: number) => {
    // Create temporary canvas for text measurement (matches UI.tsx font settings)
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return null;
    tempCtx.font = "bold 40px 'Courier New', Courier, monospace";

    // Base positioning coordinates (calibrated to match UI.tsx positioning)
    const clickableButtonX = 160;
    const clickableButtonY = 170;
    const buttonYOffset = 70;

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const buttonText = button.text;
      const btnWidth = tempCtx.measureText(buttonText).width - 14;
      const btnX = clickableButtonX + 13;
      const btnY = clickableButtonY + i * buttonYOffset;

      // Visual curvature factor for more natural button interaction
      const curveFactor = -20;

      if (canvasX >= btnX && canvasX <= btnX + btnWidth) {
        const progressAcrossButton = (canvasX - btnX) / btnWidth;
        const curvedY = btnY + (curveFactor * progressAcrossButton);
        if (canvasY >= curvedY && canvasY <= curvedY + 50) {
          return button.text;
        }
      }
    }

    // No button found at this coordinate
    return null;
  };

  const handleClick = (event: MouseEvent) => {
    // Prevent default browser behavior
    event.preventDefault();
    event.stopPropagation();
    
    // Convert click coordinates to canvas space
    const { x: canvasX, y: canvasY } = screenToCanvasCoords(event.clientX, event.clientY);
    const clickedButton = isInButtonBounds(canvasX, canvasY);

    // Handle button-specific navigation
    if (clickedButton) {
      const button = buttons.find(b => b.text === clickedButton);
      if (button) {
        const link = document.createElement('a');
        link.href = button.url;
        
        // Open in new tab with security attributes
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        // Programmatically trigger click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    // Convert mouse coordinates to canvas space
    const { x: canvasX, y: canvasY } = screenToCanvasCoords(event.clientX, event.clientY);
    const currentHoveredButton = isInButtonBounds(canvasX, canvasY);

    // Only update if hover state has changed (performance optimization)
    if (currentHoveredButton !== hoveredButton) {
      hoveredButton = currentHoveredButton;
      
      // Set target animation states based on hover
      for (let i = 0; i < buttons.length; i++) {
        targetButtonHoverProgresses[i] = (hoveredButton === buttons[i].text) ? 1 : 0;
      }
      
      // Update cursor appearance
      renderer.domElement.style.cursor = hoveredButton ? 'pointer' : 'default';
    }
  };

  const canvas = renderer.domElement;
  
  // Attach event listeners with appropriate options
  canvas.addEventListener('click', handleClick, { passive: false });
  canvas.addEventListener('mousemove', handleMouseMove);

  const updateHoverProgress = () => {
    const lerpSpeed = 0.1; // Animation speed (higher = faster transitions)
    let needsUpdate = false;

    for (let i = 0; i < buttons.length; i++) {
      buttonHoverProgresses[i] += (targetButtonHoverProgresses[i] - buttonHoverProgresses[i]) * lerpSpeed;
      if (Math.abs(buttonHoverProgresses[i] - targetButtonHoverProgresses[i]) > 0.01) {
        needsUpdate = true;
      }
    }

    if (needsUpdate) {
      // Update UI with current progress values
      ui.draw(hoveredButton, buttonHoverProgresses);
      return true;
    }
    return false;
  };

  return {
    cleanup: () => {
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
    },
    
    updateHoverProgress,
  };
}