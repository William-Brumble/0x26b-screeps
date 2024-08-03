"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Harvester = void 0;
var Harvester = /** @class */ (function () {
    function Harvester() {
    }
    Harvester.prototype.run = function (creep) {
        if (creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            console.log(sources);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if (creep.transfer(Game.spawns['mothership-0'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['mothership-0']);
            }
        }
    };
    return Harvester;
}());
exports.Harvester = Harvester;
