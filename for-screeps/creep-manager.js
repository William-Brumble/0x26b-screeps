"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreepManager = void 0;
var CreepManager = /** @class */ (function () {
    function CreepManager(_a) {
        var builder = _a.builder, harvester = _a.harvester, upgrader = _a.upgrader;
        this.builder = builder;
        this.harvester = harvester;
        this.upgrader = upgrader;
    }
    CreepManager.prototype.tick = function (room) {
        for (var name_1 in Game.creeps) {
            var creep = Game.creeps[name_1];
            if (creep.memory.role == 'harvester') {
                this.harvester.tick(creep);
            }
            else if (creep.memory.role == 'builder') {
                this.builder.tick(creep);
            }
            else if (creep.memory.role == 'upgrader') {
                this.upgrader.tick(creep);
            }
        }
    };
    return CreepManager;
}());
exports.CreepManager = CreepManager;
