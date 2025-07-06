import * as THREE from 'three';
import { UI } from './UI';

export function setupEventHandlers(
  renderer: THREE.WebGLRenderer,
  ui: UI,
) {
  // State variables to manage button hover and animation progress
  let hoveredButton: string | null = null;
  let homebrewHoverProgress = 0;
  let toolsHoverProgress = 0;
  let targetHomebrewHoverProgress = 0;
  let targetToolsHoverProgress = 0;

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

    // Button text content
    const buttonTextHomebrew = "homebrew";
    const buttonTextTools = "tools";

    // Base positioning coordinates (calibrated to match UI.tsx positioning)
    const clickableButtonX = 160;
    const clickableButtonY = 170;
    const toolsClickableAreaXOffset = 10;

    // Homebrew button bounds
    const homebrewClickableAreaXOffset = 13;
    const btnWidthHomebrew = tempCtx.measureText(buttonTextHomebrew).width - 14;
    const homebrewBtnX = clickableButtonX + homebrewClickableAreaXOffset;
    const homebrewBtnY = clickableButtonY;

    // Tools button bounds
    const toolsClickableAreaYOffset = -5;
    const buttonY2Offset = 70;
    const btnWidthTools = tempCtx.measureText(buttonTextTools).width;
    const toolsBtnX = clickableButtonX + toolsClickableAreaXOffset;
    const toolsBtnY = clickableButtonY + buttonY2Offset + toolsClickableAreaYOffset;

    // Visual curvature factor for more natural button interaction
    const curveFactor = -15;

    // Check homebrew button bounds with curvature
    if (canvasX >= homebrewBtnX && canvasX <= homebrewBtnX + btnWidthHomebrew) {
      const progressAcrossButton = (canvasX - homebrewBtnX) / btnWidthHomebrew;
      const curvedY = homebrewBtnY + (curveFactor * progressAcrossButton);
      if (canvasY >= curvedY && canvasY <= curvedY + 50) {
        return "homebrew";
      }
    }

    // Check tools button bounds with curvature
    if (canvasX >= toolsBtnX && canvasX <= toolsBtnX + btnWidthTools) {
      const progressAcrossButton = (canvasX - toolsBtnX) / btnWidthTools;
      const curvedY = toolsBtnY + (curveFactor * progressAcrossButton);
      if (canvasY >= curvedY && canvasY <= curvedY + 50) {
        return "tools";
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
      const link = document.createElement('a');
      if (clickedButton === "homebrew") {
        link.href = 'https://homebrew.sylvixor.com';
      } else if (clickedButton === "tools") {
        link.href = 'https://tools.sylvixor.com';
      }
      
      // Open in new tab with security attributes
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Programmatically trigger click
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
      targetHomebrewHoverProgress = (hoveredButton === "homebrew") ? 1 : 0;
      targetToolsHoverProgress = (hoveredButton === "tools") ? 1 : 0;
      
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
    
    // Linear interpolation towards target states
    homebrewHoverProgress += (targetHomebrewHoverProgress - homebrewHoverProgress) * lerpSpeed;
    toolsHoverProgress += (targetToolsHoverProgress - toolsHoverProgress) * lerpSpeed;

    // Check if animation is still in progress (threshold for performance)
    if (Math.abs(homebrewHoverProgress - targetHomebrewHoverProgress) > 0.01 ||
        Math.abs(toolsHoverProgress - targetToolsHoverProgress) > 0.01) {
      
      // Update UI with current progress values
      ui.draw(hoveredButton, homebrewHoverProgress, toolsHoverProgress);
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