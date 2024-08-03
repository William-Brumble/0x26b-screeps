"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomManager = void 0;
var RoomManager = /** @class */ (function () {
    function RoomManager(_a) {
        var creepManager = _a.creepManager, resourceManager = _a.resourceManager, structureManager = _a.structureManager;
        this.creepManager = creepManager;
        this.resourceManager = resourceManager;
        this.structureManager = structureManager;
    }
    RoomManager.prototype.tick = function (room) {
        this.creepManager.tick(room);
        this.resourceManager.tick(room);
        this.structureManager.tick(room);
    };
    return RoomManager;
}());
exports.RoomManager = RoomManager;
