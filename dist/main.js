var roleHarvester = require('harvester');
var sandbox = require('sandbox');
var factory  = require('factory');


module.exports.loop = function () {
    sandbox.run();
    factory.create();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}