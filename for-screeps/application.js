"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var Application = /** @class */ (function () {
    function Application(_a) {
        var shardManager = _a.shardManager;
        this.shardManager = shardManager;
    }
    Application.prototype.tick = function () {
        this.shardManager.tick();
    };
    return Application;
}());
exports.Application = Application;
