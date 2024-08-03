import { ShardManager } from "./shard-manager";

interface IApplication {
  tick: () => void;
}

type IConstructor = {
  shardManager: ShardManager;
};
export class Application implements IApplication {
  private shardManager: ShardManager;

  constructor({ shardManager }: IConstructor) {
    this.shardManager = shardManager;
  }

  tick() {
    this.shardManager.tick();
  }
}
