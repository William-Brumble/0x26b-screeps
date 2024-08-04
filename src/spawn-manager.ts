export type CreepRole = "harvester" | "builder" | "upgrader" | "defender" | "repairer";

interface CreepConfig {
  body: BodyPartConstant[];
  memory: CreepMemory;
}

export const CREEP_CONFIG: Record<CreepRole, CreepConfig> = {
  harvester: {
    body: [WORK, WORK, CARRY, MOVE],
    memory: {
      role: "harvester",
      harvesting: false,
      building: false,
      upgrading: false,
      repairing: false,
    },
  },
  builder: {
    body: [WORK, CARRY, CARRY, MOVE],
    memory: {
      role: "builder",
      harvesting: false,
      building: false,
      upgrading: false,
      repairing: false,
    },
  },
  upgrader: {
    body: [WORK, CARRY, MOVE, MOVE],
    memory: {
      role: "upgrader",
      harvesting: false,
      building: false,
      upgrading: false,
      repairing: false,
    },
  },
  defender: {
    body: [TOUGH, TOUGH, ATTACK, MOVE, MOVE],
    memory: {
      role: "defender",
      harvesting: false,
      building: false,
      upgrading: false,
      repairing: false,
    },
  },
  repairer: {
    body: [WORK, CARRY, MOVE, MOVE],
    memory: {
      role: "repairer",
      harvesting: false,
      building: false,
      upgrading: false,
      repairing: false,
    },
  },
};

export class SpawnerManager {
  tick(room: Room) {
    this.maintainCreepPopulation("builder", 3);
    this.maintainCreepPopulation("upgrader", 2);
    this.maintainCreepPopulation("harvester", 5);
    this.maintainCreepPopulation("defender", 1);
    this.maintainCreepPopulation("repairer", 1);
  }

  private maintainCreepPopulation(role: CreepRole, desiredCount: number) {
    const total: Creep[] = [];
    for (const i in Game.creeps) {
      const creep = Game.creeps[i];
      if (creep.memory.role === role) {
        total.push(creep);
      }
    }
    if (total.length < desiredCount) {
      this.spawnCreep(role);
    }
  }

  private spawnCreep(role: CreepRole) {
    const config = CREEP_CONFIG[role];
    const newName = `${role}_${Game.time}`;
    const spawn = this.findAvailableSpawn();
    if (spawn) {
      spawn.spawnCreep(config.body, newName, {
        memory: {
          role: role,
          building: false,
          upgrading: false,
          harvesting: false,
          repairing: false
        },
      });
    }
  }

  private findAvailableSpawn(): StructureSpawn | null {
    for (const spawnName in Game.spawns) {
      const spawn = Game.spawns[spawnName];
      if (!spawn.spawning) {
        return spawn;
      }
    }
    return null;
  }
}
