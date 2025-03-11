const Greeting = require("./Base");

module.exports = class Goodbye extends Greeting {
    constructor() {
        super();
        this.textTitle = "GOODBYE";
        this.textMessage = "{server}";
        this.colorTitle = "#df0909";
        this.assent = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/goodbye.png";
    }
};
