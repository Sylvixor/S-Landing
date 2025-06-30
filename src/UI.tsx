import * as THREE from 'three';

export class UI {
  public texture: THREE.CanvasTexture;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.width = 1920;
    this.canvas.height = 1080;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.minFilter = THREE.NearestFilter;
    this.texture.magFilter = THREE.NearestFilter;
    this.texture.generateMipmaps = false;
    this.draw(null, 0, 0);
  }

  public draw(hoveredButton: string | null, homebrewHoverProgress: number, toolsHoverProgress: number) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.font = "bold 45px 'Courier New', Courier, monospace";
    this.ctx.textBaseline = "top";
    this.ctx.fillStyle = "white";
    this.ctx.shadowColor = "rgba(0,0,0,0.85)";
    this.ctx.shadowBlur = 6;
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "black";
    this.ctx.imageSmoothingEnabled = false;

    const welcomeText = "Welcome, see projects below";
    const welcomeX = 60;
    this.ctx.strokeText(welcomeText, welcomeX, 40);
    this.ctx.fillText(welcomeText, welcomeX, 30);

    this.ctx.beginPath();
    this.ctx.moveTo(welcomeX, 90);
    this.ctx.lineTo(welcomeX + this.ctx.measureText(welcomeText).width, 90);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    this.ctx.stroke();

    const buttonText = "homebrew";
    this.ctx.font = "bold 40px 'Courier New', Courier, monospace";
    const buttonX = 75;
    const buttonY = 120;

    const paddingX = 16;
    const paddingY = 6;
    const btnWidth = this.ctx.measureText(buttonText).width + paddingX * 2;
    const btnHeight = 50;
    const btnX = buttonX - paddingX;
    const btnY = buttonY - paddingY / 2;
    const radius = 6;

    this.ctx.save();
    const homebrewFillAlpha = 0.2 + (0.8 * homebrewHoverProgress);
    this.ctx.fillStyle = `rgba(100, 100, 120, ${homebrewFillAlpha})`;
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

    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    if (homebrewHoverProgress < 0.1) {
      this.ctx.shadowColor = "rgba(0,0,0,0.85)";
      this.ctx.shadowBlur = 6;
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "black";
    } else {
      this.ctx.shadowColor = "transparent";
      this.ctx.shadowBlur = 0;
      this.ctx.lineWidth = 0;
    }
    const homebrewTextR = 255 - (255 * homebrewHoverProgress);
    const homebrewTextG = 255 - (255 * homebrewHoverProgress);
    const homebrewTextB = 255 - (255 * homebrewHoverProgress);
    this.ctx.fillStyle = `rgb(${homebrewTextR}, ${homebrewTextG}, ${homebrewTextB})`;
    if (homebrewHoverProgress < 0.1) {
      this.ctx.strokeText(buttonText, buttonX, buttonY);
    }
    this.ctx.fillText(buttonText, buttonX, buttonY);
    this.ctx.restore();

    this.ctx.save();
    const buttonText2 = "tools";
    const buttonY2 = buttonY + btnHeight + 20;

    const btnWidth2 = this.ctx.measureText(buttonText2).width + paddingX * 2;
    const btnX2 = buttonX - paddingX;
    const btnY2 = buttonY2 - paddingY / 2;

    const toolsFillAlpha = 0.2 + (0.8 * toolsHoverProgress);
    this.ctx.fillStyle = `rgba(100, 100, 120, ${toolsFillAlpha})`;
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

    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    if (toolsHoverProgress < 0.1) {
      this.ctx.shadowColor = "rgba(0,0,0,0.85)";
      this.ctx.shadowBlur = 6;
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "black";
    } else {
      this.ctx.shadowColor = "transparent";
      this.ctx.shadowBlur = 0;
      this.ctx.lineWidth = 0;
    }
    const toolsTextR = 255 - (255 * toolsHoverProgress);
    const toolsTextG = 255 - (255 * toolsHoverProgress);
    const toolsTextB = 255 - (255 * toolsHoverProgress);
    this.ctx.fillStyle = `rgb(${toolsTextR}, ${toolsTextG}, ${toolsTextB})`;
    if (toolsHoverProgress < 0.1) {
      this.ctx.strokeText(buttonText2, buttonX, buttonY2);
    }
    this.ctx.fillText(buttonText2, buttonX, buttonY2);
    this.ctx.restore();

    this.ctx.font = "bold 45px 'Courier New', Courier, monospace";
    this.ctx.shadowColor = "rgba(0,0,0,0.85)";
    this.ctx.shadowBlur = 6;
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "black";
    
    const creditText = "@sylvixor";
    const creditWidth = this.ctx.measureText(creditText).width;
    const creditX = this.canvas.width - creditWidth - 60;
    const creditY = this.canvas.height - 85;
  
    this.ctx.fillStyle = "white";
    this.ctx.strokeText(creditText, creditX, creditY);
    this.ctx.fillText(creditText, creditX, creditY);

    this.texture.needsUpdate = true;
  }
}
