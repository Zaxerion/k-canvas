const Canvas = require("canvas");

module.exports = class Up {

    constructor() {
        this.bg = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/20210807-112304.jpg";
        this.avatar = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/rin.jpg";
    }
     //avatar
    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    async toAttachment() {
    
    
        // Create canvas
        const canvas = Canvas.createCanvas(600, 200);
        const ctx = canvas.getContext("2d");
       
   
        // Draw background
        let background = await Canvas.loadImage(this.bg);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.save();
	ctx.beginPath();
	ctx.rotate(-25 * Math.PI / 180);
	let avatar = await Canvas.loadImage(this.avatar);
    ctx.strokeStyle = 'white';  // some color/style
	ctx.lineWidth = 3;  
	ctx.drawImage(avatar, 25, 100, 113, 113);
    ctx.strokeRect(25, 100, 113, 113);
	ctx.restore();
       
	   
        return canvas;
    }
};
