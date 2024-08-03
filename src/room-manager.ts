import { CreepManager } from "./creep-manager";
import { ResourceManager } from "./resource-manager";
import { StructureManager } from "./structure-manager";

type IConstructor = {
  creepManager: CreepManager;
  resourceManager: ResourceManager;
  structureManager: StructureManager;
};
export class RoomManager {
  private creepManager: CreepManager;
  private resourceManager: ResourceManager;
  private structureManager: StructureManager;

  constructor({
    creepManager,
    resourceManager,
    structureManager,
  }: IConstructor) {
    this.creepManager = creepManager;
    this.resourceManager = resourceManager;
    this.structureManager = structureManager;
  }

  tick(room: Room) {
    this.creepManager.tick(room);
    this.resourceManager.tick(room);
    this.structureManager.tick(room);
  }
}
