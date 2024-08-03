"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sandbox = void 0;
var Sandbox = /** @class */ (function () {
    function Sandbox() {
    }
    Sandbox.prototype.run = function () {
        var sources = Game.rooms;
        console.log(sources);
    };
    return Sandbox;
}());
exports.Sandbox = Sandbox;
