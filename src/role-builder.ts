export class Builder {
  tick(creep: Creep) {
    // Check if the creep is in building mode and has no energy left
    if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.building = false;
      creep.say("🔄 withdraw");
    }

    // Check if the creep is in withdrawing mode and is full of energy
    if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
      creep.memory.building = true;
      creep.say("🚧 build");
    }

    // If the creep is in building mode
    if (creep.memory.building) {
      // Find construction sites in the room
      const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length) {
        // Attempt to build at the closest construction site
        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], {
            visualizePathStyle: { stroke: "#ffffff" },
          });
        }
      } else {
        // If no construction sites, find other tasks (like repairing structures)
        const repairTargets = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => structure.hits < structure.hitsMax,
        });
        if (repairTargets.length) {
          if (creep.repair(repairTargets[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(repairTargets[0], {
              visualizePathStyle: { stroke: "#ffffff" },
            });
          }
        }
      }
    }
    // If the creep is in withdrawing mode
    else {
      // Find the closest structure with energy to withdraw from
      const source = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
          return (
            (structure.structureType == STRUCTURE_CONTAINER ||
              structure.structureType == STRUCTURE_STORAGE ||
              structure.structureType == STRUCTURE_SPAWN ||
              structure.structureType == STRUCTURE_EXTENSION) &&
            structure.store[RESOURCE_ENERGY] > 0
          );
        },
      });
      if (
        source &&
        creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE
      ) {
        creep.moveTo(source, { visualizePathStyle: { stroke: "#ffaa00" } });
      }
    }
  }
}