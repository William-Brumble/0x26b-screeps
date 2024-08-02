/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.create');
 * mod.thing == 'a thing'; // true
 */
function makeid(length) {
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

module.exports = {
    create: () => {
        const spawns = Game.spawns;
        for (const i in spawns) {
            console.log(JSON.stringify(Game.spawns[i]))
            const creepId = makeid(5);
            var canSpawn = Game.spawns[i].spawnCreep([WORK, CARRY, MOVE], `harvester-${creepId}`, { dryRun: true });
            if (canSpawn) {
                Game.spawns[i].spawnCreep([WORK, CARRY, MOVE], `harvester-${creepId}`, {memory: {role: 'harvester'}});
            }
        }
    }
};