const Canvas = require("canvas");
const { formatVariable, applyText } = require("../../utils/functions");

module.exports = class Burn {

    constructor() {
        this.frame = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/Spongebob.png";
        this.avatar = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/AdI794W.jpg";
    }
     //avatar
    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    
    async toAttachment() {
    
    
    // Create canvas
    const canvas = Canvas.createCanvas(1057, 1280);
    const ctx = canvas.getContext("2d");
    
    let avatar = await Canvas.loadImage(this.avatar);
   ctx.drawImage(avatar, 70, 110, 340, 430);
  
   let img = await Canvas.loadImage(this.frame);
  ctx.drawImage(img, 0, 0, 1057, 1280);
    
    return canvas;   
    }
};
