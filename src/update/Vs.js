const Canvas = require("canvas");

module.exports = class Vs {
    constructor() {
        this.bg = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/VS.png";
        this.enemyname = "anubis";
        this.enemyimage = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/Anubis.png";
        this.me = "Ling";
        this.chara = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/Hunter.png"
    }
     //avatar
    setChara(value) {
        this.chara = value;
        return this;
    }
    setEnemyimg(value) {
        this.enemyimage = value;
        return this;
    }
    setMe(value) {
        this.me = value;
        return this;
    }
    setEnemy(value) {
        this.enemyname = value;
        return this;
    }
    async toAttachment() {
    
    
        // Create canvas
const canvas = Canvas.createCanvas(610, 347);
const ctx = canvas.getContext("2d");
let bg = await Canvas.loadImage(this.bg);
ctx.drawImage(bg, 0, 0, 610, 347);
/*******ENEMY******/
let usr = this.enemyname;
let name = usr.length > 10 ? usr.substring(0, 10) + " " : usr;
ctx.font = "26px Waghu";
ctx.textAlign = 'center';
ctx.fillStyle = "#000";
ctx.fillText(name, 128, 46);
var enemy = await Canvas.loadImage(this.enemyimage);
ctx.drawImage(enemy, 48, 90, 210, 210);
/*****me*****/
let me = this.me
let naema = me.length > 10 ? me.substring(0, 10) + "" : me;
ctx.font = "26px Waghu";
ctx.textAlign = 'center';
ctx.fillStyle = "#000";
ctx.fillText(naema, 483, 319);
var chara = await Canvas.loadImage(this.chara);
ctx.drawImage(chara, 340, 110, 210, 210);

        return canvas;
    }
};
