import { Factory } from "./factory";
import { Creeps } from "./creeps";
import { Spawns } from "./spawns";

const creeps = new Creeps();
const spawns = new Spawns();
const factory = new Factory();

export function loop() {
  const availableSpawns = spawns.getAvailableSpawns();
  const harvesterCreeps = creeps.getAllHarvesterCreeps();

  // create
  if (harvesterCreeps.length < 1) {
    factory.create();
  }

  // creeps
  for (let i = 0; i < harvesterCreeps.length; i++) {
    const creep = harvesterCreeps[i];
    const activeEnergySources = creeps.commandFindAllActiveEnergySources(creep);

    // sources
    for (let i = 0; i < activeEnergySources.length; i++) {
      const source = activeEnergySources[i];

      // need to harvest
      if (creep.store.getFreeCapacity() > 0) {
        creeps.commandCreepToHarvest(creep, source);
      } else {
        // spawns
        for (let i = 0; i < availableSpawns.length; i++) {
          const spawn = availableSpawns[i];
          creeps.commandCreepToUnload(creep, spawn);
        }
      }
    }
  }
}
