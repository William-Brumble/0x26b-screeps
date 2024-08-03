export class Creeps {
  constructor() {}

  getAllHarvesterCreeps() {
    const allCreeps = this.getAllCreeps();

    const harvesterCreeps = [];
    for (let i = 0; i < allCreeps.length; i++) {
      if (
        allCreeps[i].getActiveBodyparts(WORK) &&
        allCreeps[i].getActiveBodyparts(CARRY) &&
        allCreeps[i].getActiveBodyparts(MOVE)
      ) {
        harvesterCreeps.push(allCreeps[i]);
      }
    }
    return harvesterCreeps;
  }

  private getAllCreeps() {
    const creeps: Creep[] = [];
    for (var i in Game.creeps) {
      const creep = Game.creeps[i];
      creeps.push(creep);
    }
    return creeps;
  }

  commandCreepToHarvest(creep: Creep, source: Source) {
    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
      creep.moveTo(source);
    }
  }

  commandCreepToUnload(creep: Creep, spawn: StructureSpawn) {
    if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(spawn);
    }
  }

  commandFindAllActiveEnergySources(creep: Creep) {
    return creep.room.find(FIND_SOURCES_ACTIVE);
  }
}
