import { Application } from "./application";
import { CreepManager } from "./creep-manager";
import { ResourceManager } from "./resource-manager";
import { Builder } from "./role-builder";
import { Harvester } from "./role-harvester";
import { Upgrader } from "./role-upgrader";
import { RoomManager } from "./room-manager";
import { ShardManager } from "./shard-manager";
import { SpawnerManager } from "./spawn-manager";
import { StructureManager } from "./structure-manager";

const builder = new Builder();
const harvester = new Harvester();
const upgrader = new Upgrader();
const creepManager = new CreepManager({
  builder: builder,
  harvester: harvester,
  upgrader: upgrader,
});
const spawnManager = new SpawnerManager();
const resourceManager = new ResourceManager();
const structureManager = new StructureManager();
const roomManager = new RoomManager({
  creepManager: creepManager,
  structureManager: structureManager,
  resourceManager: resourceManager,
  spawnManager: spawnManager
});
const shardManager = new ShardManager({ roomManager: roomManager });
const application = new Application({ shardManager: shardManager });

export function loop() {
  application.tick();
}
