"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loop = loop;
var factory_1 = require("./factory");
var harvester_1 = require("./harvester");
var sandbox_1 = require("./sandbox");
var sandbox = new sandbox_1.Sandbox();
var harvester = new harvester_1.Harvester();
var factory = new factory_1.Factory();
function loop() {
    sandbox.run();
    factory.create();
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        harvester.run(creep);
    }
}
