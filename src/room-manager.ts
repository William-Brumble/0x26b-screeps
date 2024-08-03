import { CreepManager } from "./creep-manager";
import { ResourceManager } from "./resource-manager";
import { StructureManager } from "./structure-manager";
import { SpawnerManager } from "./spawn-manager";

type IConstructor = {
  creepManager: CreepManager;
  resourceManager: ResourceManager;
  structureManager: StructureManager;
  spawnManager: SpawnerManager;
};
export class RoomManager {
  private creepManager: CreepManager;
  private resourceManager: ResourceManager;
  private structureManager: StructureManager;
  private spawnManager: SpawnerManager;

  constructor({
    creepManager,
    resourceManager,
    structureManager,
    spawnManager
  }: IConstructor) {
    this.creepManager = creepManager;
    this.resourceManager = resourceManager;
    this.structureManager = structureManager;
    this.spawnManager = spawnManager;
  }

  tick(room: Room) {
    this.creepManager.tick(room);
    this.resourceManager.tick(room);
    this.structureManager.tick(room);
    this.spawnManager.tick(room);
  }
}
