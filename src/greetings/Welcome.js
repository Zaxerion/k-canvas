const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "WELCOME";
        this.textMessage = "{server}";
        this.colorTitle = "#03A9F4";
        this.assent = "https://raw.githubusercontent.com/Zaxerion/databased/refs/heads/main/asset/welcome.png";
    }
};
