export type CreepRole = "harvester" | "builder" | "upgrader";

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
    },
  },
  builder: {
    body: [WORK, CARRY, CARRY, MOVE],
    memory: {
      role: "builder",
      harvesting: false,
      building: false,
      upgrading: false,
    },
  },
  upgrader: {
    body: [WORK, CARRY, MOVE, MOVE],
    memory: {
      role: "upgrader",
      harvesting: false,
      building: false,
      upgrading: false,
    },
  },
};

export class SpawnerManager {
  tick(room: Room) {
    this.maintainCreepPopulation("harvester", 5);
    this.maintainCreepPopulation("builder", 3);
    this.maintainCreepPopulation("upgrader", 2);
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
