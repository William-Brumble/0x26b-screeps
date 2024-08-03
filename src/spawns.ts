export class Spawns {
    constructor() {
    }

    getAvailableSpawns() {
        const constAllSpawns = this.getAllSpawns()
        const availableSpawns = this.getSpawnsWithSpaceForEnergy();
        return availableSpawns;
    }

    private getAllSpawns() {
        const spawns: StructureSpawn[] = []
        for (const i in Game.spawns) {
            const spawn = Game.spawns[i];
            spawns.push(spawn)
        }
        return spawns
    }

    private getSpawnsWithSpaceForEnergy() {
        const spawns: StructureSpawn[] = []
        for (const i in Game.spawns) {
            const spawn = Game.spawns[i];
            if(spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                spawns.push(spawn)
            }
        }
        return spawns
    }
}

