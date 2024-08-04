"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repairer = void 0;
var Repairer = /** @class */ (function () {
    function Repairer() {
    }
    Repairer.prototype.tick = function (creep) {
        // Check if the creep is in repairing mode and has no energy left
        if (creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
            creep.say("harvest");
        }
        // Check if the creep is in harvesting mode and has full capacity
        if (!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
            creep.memory.repairing = true;
            creep.say("repair");
        }
        // If the creep is in harvesting mode
        if (!creep.memory.repairing) {
            // Find the closest active energy source
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (source && creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, { visualizePathStyle: { stroke: "#ffffff" } });
            }
        }
        // If the creep is in repairing mode
        else {
            // Find the closest structure that needs repair
            var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: function (structure) { return structure.hits < structure.hitsMax; },
            });
            if (target && creep.repair(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, { visualizePathStyle: { stroke: "#ffffff" } });
            }
        }
    };
    return Repairer;
}());
exports.Repairer = Repairer;
