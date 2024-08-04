"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defender = void 0;
var Defender = /** @class */ (function () {
    function Defender() {
    }
    Defender.prototype.tick = function (creep) {
        // Check if the creep's health is below 50% and it needs to retreat
        if (creep.hits < creep.hitsMax / 2) {
            this.retreat(creep);
            return;
        }
        // Find the closest hostile creep
        var hostile = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
        // If there is a hostile creep, attack it
        if (hostile) {
            if (creep.attack(hostile) == ERR_NOT_IN_RANGE) {
                creep.moveTo(hostile, { visualizePathStyle: { stroke: "#ff0000" } });
            }
        }
        // If no hostile creeps are found, move to a designated patrol point near the spawn
        else {
            this.patrol(creep);
        }
    };
    // Method to handle retreating to a safe location near the spawn
    Defender.prototype.retreat = function (creep) {
        var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
        if (spawn) {
            var safeLocation = spawn.pos.findClosestByRange(FIND_FLAGS, {
                filter: function (flag) { return flag.color === COLOR_GREEN; },
            }) ||
                new RoomPosition(spawn.pos.x + 2, spawn.pos.y + 2, creep.room.name);
            creep.moveTo(safeLocation, { visualizePathStyle: { stroke: "#00ff00" } });
            creep.say("retreat");
        }
    };
    // Method to handle patrolling around the spawn
    Defender.prototype.patrol = function (creep) {
        var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
        if (spawn) {
            var patrolPoint = spawn.pos.findClosestByRange(FIND_FLAGS, {
                filter: function (flag) { return flag.color === COLOR_BLUE; },
            }) ||
                new RoomPosition(spawn.pos.x + 4, spawn.pos.y + 4, creep.room.name);
            creep.moveTo(patrolPoint, { visualizePathStyle: { stroke: "#0000ff" } });
            creep.say("patrol");
        }
    };
    return Defender;
}());
exports.Defender = Defender;
