"use strict";
exports.__esModule = true;
var Operations_1 = require("./../Operations/Operations");
var Parser = /** @class */ (function () {
    function Parser(expressions) {
        this.expressions = expressions;
    }
    Parser.prototype.Parse = function (input) {
        var expression = input;
        this.expressions.forEach(function (re) {
            var subResult = expression;
            var reR = re.exec(subResult);
            while (reR != null) {
                var ex = reR[0];
                reR = re.exec(subResult);
                subResult = subResult.replace(ex, Parser.Calculate(ex));
            }
            expression = subResult;
        });
        return expression;
    };
    Parser.Calculate = function (ex) {
        var exParts = ex.split(/\b/);
        var ot = Operations_1.OperationType[exParts[1]];
        var operation = Operations_1.OperationsFabric.CreateOperation(ot);
        return operation.Calculate(parseFloat(exParts[0]), parseFloat(exParts[2])).toString();
    };
    return Parser;
}());
exports["default"] = Parser;
