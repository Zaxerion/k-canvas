const Canvas = require("canvas");

module.exports = class Horny {

    constructor() {
        this.bg = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/Horny.jpg";
        this.avatar = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/rin.jpg";
    }
     //avatar
    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    async toBuild() {
    
    
        // Create canvas
        const canvas = Canvas.createCanvas(500, 468);
        const ctx = canvas.getContext("2d");
       
   
        // Draw background
        let background = await Canvas.loadImage(this.bg);
        ctx.drawImage(background, 0, 0, 500, 468);

    ctx.save();
	ctx.beginPath();
	ctx.rotate(-22 * Math.PI / 180);
	let avatar = await Canvas.loadImage(this.avatar);
    ctx.strokeStyle = '#450d00';  // some color/style
	ctx.lineWidth = 4;  
	ctx.drawImage(avatar, -27, 210, 126, 126);
    ctx.strokeRect(-27, 210, 126, 126);
	ctx.restore();
       
	   
        return canvas;
    }
};
