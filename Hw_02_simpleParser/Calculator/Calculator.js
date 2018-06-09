"use strict";
exports.__esModule = true;
var Operations_1 = require("./../Operations/Operations");
var Calculator = /** @class */ (function () {
    // private operations: IOperation[];
    function Calculator() {
        for (var operationType in Operations_1.OperationType) {
            if (!Number(operationType)) {
                console.log(operationType);
            }
        }
        var x = Operations_1.OperationsFabric.CreateOperation(Operations_1.OperationType.Addition);
    }
    Calculator.prototype.Calculate = function (expression) {
        return "1";
    };
    return Calculator;
}());
exports["default"] = Calculator;
/*
function xxx(): void {


    let parserRegExps: RegExp[] = [
        new RegExp(/\d+[\*\/]\d+/),
        new RegExp(/\d+[-\+]\d+/)
    ];
 let parser : IParser = new Parser([], parserRegExps);
} */ 
