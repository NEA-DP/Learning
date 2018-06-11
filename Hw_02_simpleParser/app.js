"use strict";
exports.__esModule = true;
var Calculator_1 = require("./Calculator/Calculator");
(function main() {
    var c = new Calculator_1["default"]();
    console.log(c.Calculate("1+2"));
    console.log(c.Calculate("2+2*2"));
    console.log(c.Calculate("1-6/2"));
})();
