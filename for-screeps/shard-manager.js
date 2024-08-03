"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardManager = void 0;
var ShardManager = /** @class */ (function () {
    function ShardManager(_a) {
        var roomManager = _a.roomManager;
        this.roomManager = roomManager;
    }
    ShardManager.prototype.tick = function () {
        for (var roomName in Game.rooms) {
            var room = Game.rooms[roomName];
            this.roomManager.tick(room);
        }
    };
    return ShardManager;
}());
exports.ShardManager = ShardManager;
