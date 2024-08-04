export class Defender {
  tick(creep: Creep) {
    // Check if the creep's health is below 50% and it needs to retreat
    if (creep.hits < creep.hitsMax / 2) {
      this.retreat(creep);
      return;
    }

    // Find the closest hostile creep
    const hostile = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);

    // If there is a hostile creep, attack it
    if (hostile) {
      if (creep.attack(hostile) == ERR_NOT_IN_RANGE) {
        creep.moveTo(hostile, { visualizePathStyle: { stroke: "#ff0000" } });
      }
    }
    // If no hostile creeps are found, move to a designated patrol point near the spawn
    else {
      this.patrol(creep);
    }
  }

  // Method to handle retreating to a safe location near the spawn
  retreat(creep: Creep) {
    const spawn = creep.room.find(FIND_MY_SPAWNS)[0];
    if (spawn) {
      const safeLocation =
        spawn.pos.findClosestByRange(FIND_FLAGS, {
          filter: (flag) => flag.color === COLOR_GREEN,
        }) ||
        new RoomPosition(spawn.pos.x + 2, spawn.pos.y + 2, creep.room.name);
      creep.moveTo(safeLocation, { visualizePathStyle: { stroke: "#ff0000" } });
      creep.say("retreat");
    }
  }

  // Method to handle patrolling around the spawn
  patrol(creep: Creep) {
    const spawn = creep.room.find(FIND_MY_SPAWNS)[0];
    if (spawn) {
      const patrolPoint =
        spawn.pos.findClosestByRange(FIND_FLAGS, {
          filter: (flag) => flag.color === COLOR_BLUE,
        }) ||
        new RoomPosition(spawn.pos.x + 4, spawn.pos.y + 4, creep.room.name);
      creep.moveTo(patrolPoint, { visualizePathStyle: { stroke: "#0000ff" } });
      creep.say("patrol");
    }
  }
}
