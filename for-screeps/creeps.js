"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creeps = void 0;
var Creeps = /** @class */ (function () {
    function Creeps() {
    }
    Creeps.prototype.getAllHarvesterCreeps = function () {
        var allCreeps = this.getAllCreeps();
        var harvesterCreeps = [];
        for (var i = 0; i < allCreeps.length; i++) {
            if (allCreeps[i].getActiveBodyparts(WORK) &&
                allCreeps[i].getActiveBodyparts(CARRY) &&
                allCreeps[i].getActiveBodyparts(MOVE)) {
                harvesterCreeps.push(allCreeps[i]);
            }
        }
        return harvesterCreeps;
    };
    Creeps.prototype.getAllCreeps = function () {
        var creeps = [];
        for (var i in Game.creeps) {
            var creep = Game.creeps[i];
            creeps.push(creep);
        }
        return creeps;
    };
    Creeps.prototype.commandCreepToHarvest = function (creep, source) {
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    };
    Creeps.prototype.commandCreepToUnload = function (creep, spawn) {
        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(spawn);
        }
    };
    Creeps.prototype.commandFindAllActiveEnergySources = function (creep) {
        return creep.room.find(FIND_SOURCES_ACTIVE);
    };
    return Creeps;
}());
exports.Creeps = Creeps;
