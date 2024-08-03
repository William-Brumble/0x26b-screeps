"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function () {
        var spawns = Game.spawns;
        for (var i in spawns) {
            var creepId = this.makeid(5);
            var canSpawn = Game.spawns[i].spawnCreep([WORK, CARRY, MOVE], "harvester-".concat(creepId), { dryRun: true });
            if (canSpawn === OK) {
                Game.spawns[i].spawnCreep([WORK, CARRY, MOVE], "harvester-".concat(creepId), { memory: { role: 'harvester' } });
            }
        }
    };
    Factory.prototype.makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        var counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    };
    return Factory;
}());
exports.Factory = Factory;
