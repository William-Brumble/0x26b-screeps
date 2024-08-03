"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loop = loop;
var factory_1 = require("./factory");
var creeps_1 = require("./creeps");
var spawns_1 = require("./spawns");
var creeps = new creeps_1.Creeps();
var spawns = new spawns_1.Spawns();
var factory = new factory_1.Factory();
function loop() {
    var availableSpawns = spawns.getAvailableSpawns();
    var harvesterCreeps = creeps.getAllHarvesterCreeps();
    // create
    if (harvesterCreeps.length < 1) {
        factory.create();
    }
    // creeps
    for (var i = 0; i < harvesterCreeps.length; i++) {
        var creep = harvesterCreeps[i];
        var activeEnergySources = creeps.commandFindAllActiveEnergySources(creep);
        // sources
        for (var i_1 = 0; i_1 < activeEnergySources.length; i_1++) {
            var source = activeEnergySources[i_1];
            // need to harvest
            if (creep.store.getFreeCapacity() > 0) {
                creeps.commandCreepToHarvest(creep, source);
            }
            else {
                // spawns
                for (var i_2 = 0; i_2 < availableSpawns.length; i_2++) {
                    var spawn = availableSpawns[i_2];
                    creeps.commandCreepToUnload(creep, spawn);
                }
            }
        }
    }
}
