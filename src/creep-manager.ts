import { Builder } from "./role-builder";
import { Defender } from "./role-defender";
import { Harvester } from "./role-harvester";
import { Repairer } from "./role-repairer";
import { Upgrader } from "./role-upgrader";

interface ICreepManager {
  tick: (room: Room) => void;
}

type IConstructor = {
  builder: Builder;
  harvester: Harvester;
  upgrader: Upgrader;
  defender: Defender;
  repairer: Repairer;
};

export class CreepManager implements ICreepManager {
  private builder: Builder;
  private harvester: Harvester;
  private upgrader: Upgrader;
  private defender: Defender;
  private repairer: Repairer;

  constructor({
    builder,
    harvester,
    upgrader,
    defender,
    repairer,
  }: IConstructor) {
    this.builder = builder;
    this.harvester = harvester;
    this.upgrader = upgrader;
    this.defender = defender;
    this.repairer = repairer;
  }

  tick(room: Room) {
    for (let name in Game.creeps) {
      let creep = Game.creeps[name];
      if (creep.memory.role == "harvester") {
        this.harvester.tick(creep);
      } else if (creep.memory.role == "builder") {
        this.builder.tick(creep);
      } else if (creep.memory.role == "upgrader") {
        this.upgrader.tick(creep);
      } else if (creep.memory.role == "defender") {
        this.defender.tick(creep);
      } else if (creep.memory.role == "repairer") {
        this.repairer.tick(creep);
      }
    }
  }
}
