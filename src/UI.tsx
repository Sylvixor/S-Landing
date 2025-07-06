import * as THREE from 'three';

export class UI {
  public texture: THREE.CanvasTexture;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    // Create the canvas element for drawing UI elements
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
    
    // Set high resolution for crisp text rendering
    this.canvas.width = 1920;
    this.canvas.height = 1080;
    
    // Create Three.js texture from canvas
    this.texture = new THREE.CanvasTexture(this.canvas);
    
    // Use nearest filtering for sharp text edges
    this.texture.minFilter = THREE.NearestFilter;
    this.texture.magFilter = THREE.NearestFilter;
    this.texture.generateMipmaps = false;
    
    // Initial draw with no hover states
    this.draw(null, 0, 0);
  }

  public draw(hoveredButton: string | null, homebrewHoverProgress: number, toolsHoverProgress: number) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Set up font and styling for the main welcome text
    this.ctx.font = "bold 45px 'Courier New', Courier, monospace";
    this.ctx.textBaseline = "top";
    this.ctx.fillStyle = "white";
    this.ctx.shadowColor = "rgba(0,0,0,0.85)";
    this.ctx.shadowBlur = 6;
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "black";
    this.ctx.imageSmoothingEnabled = false;

    // Draw the main welcome text with stroke outline for better visibility
    const welcomeText = "Welcome, see projects below";
    const welcomeX = 60;
    this.ctx.strokeText(welcomeText, welcomeX, 40);
    this.ctx.fillText(welcomeText, welcomeX, 30);

    // Draw underline beneath welcome text
    this.ctx.beginPath();
    this.ctx.moveTo(welcomeX, 90);
    this.ctx.lineTo(welcomeX + this.ctx.measureText(welcomeText).width, 90);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    this.ctx.stroke();

    // Homebrew button section
    const buttonText = "homebrew";
    this.ctx.font = "bold 40px 'Courier New', Courier, monospace";
    const buttonX = 75;
    const buttonY = 120;

    // Calculate button dimensions with padding
    const paddingX = 16;
    const paddingY = 6;
    const btnWidth = this.ctx.measureText(buttonText).width + paddingX * 2;
    const btnHeight = 50;
    const btnX = buttonX - paddingX;
    const btnY = buttonY - paddingY / 2;
    const radius = 6;

    // Save context state before drawing button
    this.ctx.save();
    
    // Calculate dynamic fill alpha based on hover progress
    const homebrewFillAlpha = 0.2 + (0.8 * homebrewHoverProgress);
    this.ctx.fillStyle = `rgba(100, 100, 120, ${homebrewFillAlpha})`;
    
    // Draw rounded rectangle background for homebrew button
    this.ctx.beginPath();
    this.ctx.moveTo(btnX + radius, btnY);
    this.ctx.lineTo(btnX + btnWidth - radius, btnY);
    this.ctx.quadraticCurveTo(btnX + btnWidth, btnY, btnX + btnWidth, btnY + radius);
    this.ctx.lineTo(btnX + btnWidth, btnY + btnHeight - radius);
    this.ctx.quadraticCurveTo(btnX + btnWidth, btnY + btnHeight, btnX + btnWidth - radius, btnY + btnHeight);
    this.ctx.lineTo(btnX + radius, btnY + btnHeight);
    this.ctx.quadraticCurveTo(btnX, btnY + btnHeight, btnX, btnY + btnHeight - radius);
    this.ctx.lineTo(btnX, btnY + radius);
    this.ctx.quadraticCurveTo(btnX, btnY, btnX + radius, btnY);
    this.ctx.closePath();
    this.ctx.fill();

    // Draw button border
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    // Conditional text styling based on hover state
    if (homebrewHoverProgress < 0.1) {
      // Not hovered - use shadow and stroke for visibility
      this.ctx.shadowColor = "rgba(0,0,0,0.85)";
      this.ctx.shadowBlur = 6;
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "black";
    } else {
      // Hovered - clean appearance without shadows
      this.ctx.shadowColor = "transparent";
      this.ctx.shadowBlur = 0;
      this.ctx.lineWidth = 0;
    }
    
    // Animate text color from white to black on hover
    const homebrewTextR = 255 - (255 * homebrewHoverProgress);
    const homebrewTextG = 255 - (255 * homebrewHoverProgress);
    const homebrewTextB = 255 - (255 * homebrewHoverProgress);
    this.ctx.fillStyle = `rgb(${homebrewTextR}, ${homebrewTextG}, ${homebrewTextB})`;
    
    // Draw text with conditional stroke
    if (homebrewHoverProgress < 0.1) {
      this.ctx.strokeText(buttonText, buttonX, buttonY);
    }
    this.ctx.fillText(buttonText, buttonX, buttonY);
    this.ctx.restore();

    // Tools button section
    this.ctx.save();
    const buttonText2 = "tools";
    const buttonY2 = buttonY + btnHeight + 20;

    // Calculate tools button dimensions
    const btnWidth2 = this.ctx.measureText(buttonText2).width + paddingX * 2;
    const btnX2 = buttonX - paddingX;
    const btnY2 = buttonY2 - paddingY / 2;

    // Dynamic fill alpha for tools button
    const toolsFillAlpha = 0.2 + (0.8 * toolsHoverProgress);
    this.ctx.fillStyle = `rgba(100, 100, 120, ${toolsFillAlpha})`;
    
    // Draw rounded rectangle background for tools button
    this.ctx.beginPath();
    this.ctx.moveTo(btnX2 + radius, btnY2);
    this.ctx.lineTo(btnX2 + btnWidth2 - radius, btnY2);
    this.ctx.quadraticCurveTo(btnX2 + btnWidth2, btnY2, btnX2 + btnWidth2, btnY2 + radius);
    this.ctx.lineTo(btnX2 + btnWidth2, btnY2 + btnHeight - radius);
    this.ctx.quadraticCurveTo(btnX2 + btnWidth2, btnY2 + btnHeight, btnX2 + btnWidth2 - radius, btnY2 + btnHeight);
    this.ctx.lineTo(btnX2 + radius, btnY2 + btnHeight);
    this.ctx.quadraticCurveTo(btnX2, btnY2 + btnHeight, btnX2, btnY2 + btnHeight - radius);
    this.ctx.lineTo(btnX2, btnY2 + radius);
    this.ctx.quadraticCurveTo(btnX2, btnY2, btnX2 + radius, btnY2);
    this.ctx.closePath();
    this.ctx.fill();

    // Draw tools button border
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    // Conditional text styling for tools button
    if (toolsHoverProgress < 0.1) {
      // Not hovered - use shadow and stroke
      this.ctx.shadowColor = "rgba(0,0,0,0.85)";
      this.ctx.shadowBlur = 6;
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "black";
    } else {
      // Hovered - clean appearance
      this.ctx.shadowColor = "transparent";
      this.ctx.shadowBlur = 0;
      this.ctx.lineWidth = 0;
    }
    
    // Animate tools button text color
    const toolsTextR = 255 - (255 * toolsHoverProgress);
    const toolsTextG = 255 - (255 * toolsHoverProgress);
    const toolsTextB = 255 - (255 * toolsHoverProgress);
    this.ctx.fillStyle = `rgb(${toolsTextR}, ${toolsTextG}, ${toolsTextB})`;
    
    // Draw tools button text
    if (toolsHoverProgress < 0.1) {
      this.ctx.strokeText(buttonText2, buttonX, buttonY2);
    }
    this.ctx.fillText(buttonText2, buttonX, buttonY2);
    this.ctx.restore();

    // Reset font for credit text
    this.ctx.font = "bold 45px 'Courier New', Courier, monospace";
    this.ctx.shadowColor = "rgba(0,0,0,0.85)";
    this.ctx.shadowBlur = 6;
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "black";
    
    // Position credit text in bottom-right corner
    const creditText = "@sylvixor";
    const creditWidth = this.ctx.measureText(creditText).width;
    const creditX = this.canvas.width - creditWidth - 60;
    const creditY = this.canvas.height - 85;
  
    // Draw credit text with outline
    this.ctx.fillStyle = "white";
    this.ctx.strokeText(creditText, creditX, creditY);
    this.ctx.fillText(creditText, creditX, creditY);

    // Mark texture as needing update for Three.js
    this.texture.needsUpdate = true;
  }
}