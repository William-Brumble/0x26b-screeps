export class Harvester {
  tick(creep: Creep) {
    // Check if the creep is in harvesting mode and has no free capacity
    if (creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
      creep.memory.harvesting = false;
      creep.say("deliver");
    }

    // Check if the creep is in delivery mode and has no energy left
    if (!creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.harvesting = true;
      creep.say("harvest");
    }

    // If the creep is in harvesting mode
    if (creep.memory.harvesting) {
      // Find the closest active energy source
      const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
      if (source && creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source, { visualizePathStyle: { stroke: "#ffffff" } });
      }
    }
    // If the creep is in delivery mode
    else {
      // Find the closest structure that needs energy
      const target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
          return (
            (structure.structureType == STRUCTURE_SPAWN ||
              structure.structureType == STRUCTURE_EXTENSION ||
              structure.structureType == STRUCTURE_TOWER ||
              structure.structureType == STRUCTURE_STORAGE) &&
            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
          );
        },
      });
      if (
        target &&
        creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE
      ) {
        creep.moveTo(target, { visualizePathStyle: { stroke: "#ffffff" } });
      }
    }
  }
}
