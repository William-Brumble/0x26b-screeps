export class Factory {
    constructor() {
    }
    create() {
        const spawns = Game.spawns;
        for (const i in spawns) {
            console.log(JSON.stringify(Game.spawns[i]));
            const creepId = this.makeid(5);
            var canSpawn = Game.spawns[i].spawnCreep([WORK, CARRY, MOVE], `harvester-${creepId}`, { dryRun: true });
            if (canSpawn) {
                Game.spawns[i].spawnCreep([WORK, CARRY, MOVE], `harvester-${creepId}`, { memory: { role: 'harvester' } });
            }
        }
    }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
}
