"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Harvester = void 0;
var Harvester = /** @class */ (function () {
    function Harvester() {
    }
    Harvester.prototype.tick = function (creep) {
        // Check if the creep is in harvesting mode and has no free capacity
        if (creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
            creep.memory.harvesting = false;
            creep.say("deliver");
        }
        // Check if the creep is in delivery mode and has no energy left
        if (!creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.harvesting = true;
            creep.say("harvest");
        }
        // If the creep is in harvesting mode
        if (creep.memory.harvesting) {
            // Find the closest active energy source
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (source && creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, { visualizePathStyle: { stroke: "#ffaa00" } });
            }
        }
        // If the creep is in delivery mode
        else {
            // Find the closest structure that needs energy
            var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: function (structure) {
                    return ((structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_STORAGE) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0);
                },
            });
            if (target &&
                creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, { visualizePathStyle: { stroke: "#ffaa00" } });
            }
        }
    };
    return Harvester;
}());
exports.Harvester = Harvester;
