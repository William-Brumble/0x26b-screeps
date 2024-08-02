var roleHarvester = require('role.harvester');
var sandbox = require('test.sandbox');
var factory  = require('spawn.create');


module.exports.loop = function () {
    sandbox.run();
    factory.create();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}