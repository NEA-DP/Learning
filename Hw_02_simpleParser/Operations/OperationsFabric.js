"use strict";
exports.__esModule = true;
var Operations_1 = require("./Operations");
var Operations_2 = require("./Operations");
var OperationsFabric = /** @class */ (function () {
    function OperationsFabric() {
    }
    OperationsFabric.CreateOperation = function (operationType) {
        switch (operationType) {
            case Operations_1.OperationType["+"]: return new Operations_2.AdditionOperation();
            case Operations_1.OperationType["-"]: return new Operations_2.SubtractionOperation();
            case Operations_1.OperationType["*"]: return new Operations_2.MultiplicationOperation();
            case Operations_1.OperationType["/"]: return new Operations_2.DivisionOperation();
        }
    };
    return OperationsFabric;
}());
exports["default"] = OperationsFabric;
