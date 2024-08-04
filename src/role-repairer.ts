export class Repairer {
  tick(creep: Creep) {
    // Check if the creep is in repairing mode and has no energy left
    if (creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.repairing = false;
      creep.say("harvest");
    }

    // Check if the creep is in harvesting mode and has full capacity
    if (!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
      creep.memory.repairing = true;
      creep.say("repair");
    }

    // If the creep is in harvesting mode
    if (!creep.memory.repairing) {
      // Find the closest active energy source
      const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
      if (source && creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source, { visualizePathStyle: { stroke: "#ffffff" } });
      }
    }
    // If the creep is in repairing mode
    else {
      // Find the closest structure that needs repair
      const target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax,
      });
      if (target && creep.repair(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target, { visualizePathStyle: { stroke: "#ffffff" } });
      }
    }
  }
}
