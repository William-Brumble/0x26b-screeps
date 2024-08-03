"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spawns = void 0;
var Spawns = /** @class */ (function () {
    function Spawns() {
    }
    Spawns.prototype.getAvailableSpawns = function () {
        var constAllSpawns = this.getAllSpawns();
        var availableSpawns = this.getSpawnsWithSpaceForEnergy();
        return availableSpawns;
    };
    Spawns.prototype.getAllSpawns = function () {
        var spawns = [];
        for (var i in Game.spawns) {
            var spawn = Game.spawns[i];
            spawns.push(spawn);
        }
        return spawns;
    };
    Spawns.prototype.getSpawnsWithSpaceForEnergy = function () {
        var spawns = [];
        for (var i in Game.spawns) {
            var spawn = Game.spawns[i];
            if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                spawns.push(spawn);
            }
        }
        return spawns;
    };
    return Spawns;
}());
exports.Spawns = Spawns;
