"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upgrader = void 0;
var Upgrader = /** @class */ (function () {
    function Upgrader() {
    }
    Upgrader.prototype.tick = function (creep) {
        // Check if the creep is in upgrading mode and has no energy left
        if (creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say("🔄 harvest");
        }
        // Check if the creep is in harvesting mode and is full of energy
        if (!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
            creep.memory.upgrading = true;
            creep.say("⚡ upgrade");
        }
        // If the creep is in upgrading mode
        if (creep.memory.upgrading) {
            // Attempt to upgrade the room controller
            if (creep.room.controller) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {
                        visualizePathStyle: { stroke: "#ffffff" },
                    });
                }
            }
        }
        // If the creep is in harvesting mode
        else {
            // Find the closest active energy source
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (source && creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, { visualizePathStyle: { stroke: "#ffaa00" } });
            }
        }
    };
    return Upgrader;
}());
exports.Upgrader = Upgrader;
