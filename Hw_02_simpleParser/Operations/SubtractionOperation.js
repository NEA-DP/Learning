"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Operations_1 = require("./Operations");
var SubtractionOperation = /** @class */ (function (_super) {
    __extends(SubtractionOperation, _super);
    function SubtractionOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubtractionOperation.prototype.Calculate = function (x, y) {
        return x - y;
    };
    return SubtractionOperation;
}(Operations_1.OperationBase));
exports["default"] = SubtractionOperation;
