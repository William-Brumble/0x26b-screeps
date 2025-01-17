"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpawnerManager = exports.CREEP_CONFIG = void 0;
exports.CREEP_CONFIG = {
    harvester: {
        body: [WORK, WORK, CARRY, MOVE],
        memory: {
            role: "harvester",
            harvesting: false,
            building: false,
            upgrading: false,
            repairing: false,
        },
    },
    builder: {
        body: [WORK, CARRY, CARRY, MOVE],
        memory: {
            role: "builder",
            harvesting: false,
            building: false,
            upgrading: false,
            repairing: false,
        },
    },
    upgrader: {
        body: [WORK, CARRY, MOVE, MOVE],
        memory: {
            role: "upgrader",
            harvesting: false,
            building: false,
            upgrading: false,
            repairing: false,
        },
    },
    defender: {
        body: [TOUGH, TOUGH, ATTACK, MOVE, MOVE],
        memory: {
            role: "defender",
            harvesting: false,
            building: false,
            upgrading: false,
            repairing: false,
        },
    },
    repairer: {
        body: [WORK, CARRY, MOVE, MOVE],
        memory: {
            role: "repairer",
            harvesting: false,
            building: false,
            upgrading: false,
            repairing: false,
        },
    },
};
var SpawnerManager = /** @class */ (function () {
    function SpawnerManager() {
    }
    SpawnerManager.prototype.tick = function (room) {
        this.maintainCreepPopulation("builder", 3);
        this.maintainCreepPopulation("upgrader", 2);
        this.maintainCreepPopulation("harvester", 5);
        this.maintainCreepPopulation("defender", 1);
        this.maintainCreepPopulation("repairer", 1);
    };
    SpawnerManager.prototype.maintainCreepPopulation = function (role, desiredCount) {
        var total = [];
        for (var i in Game.creeps) {
            var creep = Game.creeps[i];
            if (creep.memory.role === role) {
                total.push(creep);
            }
        }
        if (total.length < desiredCount) {
            this.spawnCreep(role);
        }
    };
    SpawnerManager.prototype.spawnCreep = function (role) {
        var config = exports.CREEP_CONFIG[role];
        var newName = "".concat(role, "_").concat(Game.time);
        var spawn = this.findAvailableSpawn();
        if (spawn) {
            spawn.spawnCreep(config.body, newName, {
                memory: {
                    role: role,
                    building: false,
                    upgrading: false,
                    harvesting: false,
                    repairing: false
                },
            });
        }
    };
    SpawnerManager.prototype.findAvailableSpawn = function () {
        for (var spawnName in Game.spawns) {
            var spawn = Game.spawns[spawnName];
            if (!spawn.spawning) {
                return spawn;
            }
        }
        return null;
    };
    return SpawnerManager;
}());
exports.SpawnerManager = SpawnerManager;
