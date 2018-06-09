"use strict";
(function (expressions) {
    expressions.forEach(function (expression) {
        console.log(parseStr(expression));
    });
})(["1+2", "2+2*2", "1-6/2"]);
function parseStr(input) {
    var operations = {
        "*": function (x, y) { return parseFloat(x) * parseFloat(y); },
        "/": function (x, y) { return parseFloat(x) / parseFloat(y); },
        "+": function (x, y) { return parseFloat(x) + parseFloat(y); },
        "-": function (x, y) { return parseFloat(x) - parseFloat(y); },
    };
    var parserRegExps = [
        new RegExp(/\d+[\*\/]\d+/),
        new RegExp(/\d+[-\+]\d+/)
    ];
    var calculate = function (ex) {
        var exParts = ex.split(/\b/);
        return operations[exParts[1]](exParts[0], exParts[2]).toString();
    };
    var expression = input;
    parserRegExps.forEach(function (re) {
        var subResult = expression;
        var reR = re.exec(subResult);
        while (reR != null) {
            var ex = reR[0];
            reR = re.exec(subResult);
            subResult = subResult.replace(ex, calculate(ex));
        }
        expression = subResult;
    });
    return expression;
}
//# sourceMappingURL=parserApp.js.map