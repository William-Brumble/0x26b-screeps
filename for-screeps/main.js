"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loop = loop;
var application_1 = require("./application");
var creep_manager_1 = require("./creep-manager");
var resource_manager_1 = require("./resource-manager");
var role_builder_1 = require("./role-builder");
var role_harvester_1 = require("./role-harvester");
var role_upgrader_1 = require("./role-upgrader");
var room_manager_1 = require("./room-manager");
var shard_manager_1 = require("./shard-manager");
var structure_manager_1 = require("./structure-manager");
var builder = new role_builder_1.Builder();
var harvester = new role_harvester_1.Harvester();
var upgrader = new role_upgrader_1.Upgrader();
var creepManager = new creep_manager_1.CreepManager({
    builder: builder,
    harvester: harvester,
    upgrader: upgrader,
});
var resourceManager = new resource_manager_1.ResourceManager();
var structureManager = new structure_manager_1.StructureManager();
var roomManager = new room_manager_1.RoomManager({
    creepManager: creepManager,
    structureManager: structureManager,
    resourceManager: resourceManager,
});
var shardManager = new shard_manager_1.ShardManager({ roomManager: roomManager });
var application = new application_1.Application({ shardManager: shardManager });
function loop() {
    application.tick();
}
