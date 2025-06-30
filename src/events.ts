import * as THREE from 'three';
import { UI } from './UI';

export function setupEventHandlers(
  renderer: THREE.WebGLRenderer,
  ui: UI,
) {
  let hoveredButton: string | null = null;
  let homebrewHoverProgress = 0;
  let toolsHoverProgress = 0;
  let targetHomebrewHoverProgress = 0;
  let targetToolsHoverProgress = 0;

  const screenToCanvasCoords = (screenX: number, screenY: number) => {
    const canvas = renderer.domElement;
    const rect = canvas.getBoundingClientRect();
    const canvasX = screenX - rect.left;
    const canvasY = screenY - rect.top;
    const normalizedX = canvasX / rect.width;
    const normalizedY = canvasY / rect.height;
    const textureX = normalizedX * 1920;
    const textureY = normalizedY * 1080;
    return { x: textureX, y: textureY };
  };

  const isInButtonBounds = (canvasX: number, canvasY: number) => {
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return null;
    tempCtx.font = "bold 40px 'Courier New', Courier, monospace";

    const buttonTextHomebrew = "homebrew";
    const buttonTextTools = "tools";

    const clickableButtonX = 160;
    const clickableButtonY = 170;
    const toolsClickableAreaXOffset = 10;

    const homebrewClickableAreaXOffset = 13;
    const btnWidthHomebrew = tempCtx.measureText(buttonTextHomebrew).width - 14;
    const homebrewBtnX = clickableButtonX + homebrewClickableAreaXOffset;
    const homebrewBtnY = clickableButtonY;

    const toolsClickableAreaYOffset = -5;
    const buttonY2Offset = 70;
    const btnWidthTools = tempCtx.measureText(buttonTextTools).width;
    const toolsBtnX = clickableButtonX + toolsClickableAreaXOffset;
    const toolsBtnY = clickableButtonY + buttonY2Offset + toolsClickableAreaYOffset;

    const curveFactor = -15;

    if (canvasX >= homebrewBtnX && canvasX <= homebrewBtnX + btnWidthHomebrew) {
      const progressAcrossButton = (canvasX - homebrewBtnX) / btnWidthHomebrew;
      const curvedY = homebrewBtnY + (curveFactor * progressAcrossButton);
      if (canvasY >= curvedY && canvasY <= curvedY + 50) {
        return "homebrew";
      }
    }

    if (canvasX >= toolsBtnX && canvasX <= toolsBtnX + btnWidthTools) {
      const progressAcrossButton = (canvasX - toolsBtnX) / btnWidthTools;
      const curvedY = toolsBtnY + (curveFactor * progressAcrossButton);
      if (canvasY >= curvedY && canvasY <= curvedY + 50) {
        return "tools";
      }
    }

    return null;
  };

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const { x: canvasX, y: canvasY } = screenToCanvasCoords(event.clientX, event.clientY);
    const clickedButton = isInButtonBounds(canvasX, canvasY);

    if (clickedButton) {
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

  const canvas = renderer.domElement;
  canvas.addEventListener('click', handleClick, { passive: false });
  canvas.addEventListener('mousemove', handleMouseMove);

  const updateHoverProgress = () => {
    const lerpSpeed = 0.1;
    homebrewHoverProgress += (targetHomebrewHoverProgress - homebrewHoverProgress) * lerpSpeed;
    toolsHoverProgress += (targetToolsHoverProgress - toolsHoverProgress) * lerpSpeed;

    if (Math.abs(homebrewHoverProgress - targetHomebrewHoverProgress) > 0.01 ||
        Math.abs(toolsHoverProgress - targetToolsHoverProgress) > 0.01) {
      ui.draw(hoveredButton, homebrewHoverProgress, toolsHoverProgress);
      return true; // Indicate that UI was updated
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
