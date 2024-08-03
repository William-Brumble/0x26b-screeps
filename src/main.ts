import { Factory } from "./factory";
import { Harvester } from "./harvester";
import { Sandbox } from "./sandbox";

const sandbox = new Sandbox();
const harvester = new Harvester();
const factory = new Factory();

export function loop() {
    sandbox.run();
    factory.create();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        harvester.run(creep);
    }

}