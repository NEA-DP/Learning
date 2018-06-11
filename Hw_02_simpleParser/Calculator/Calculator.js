"use strict";
exports.__esModule = true;
var Parser_1 = require("../Parser/Parser");
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.parser = new Parser_1["default"](this.getRegExps());
    }
    Calculator.prototype.Calculate = function (expression) {
        return expression + " = " + this.parser.Parse(expression);
    };
    Calculator.prototype.getRegExps = function () {
        return [
            new RegExp(/\d+[\*\/]\d+/),
            new RegExp(/\d+[-\+]\d+/)
        ];
    };
    return Calculator;
}());
exports["default"] = Calculator;
