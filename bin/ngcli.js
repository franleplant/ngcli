#!/usr/bin/env node


var fs = require('fs');
var argv = require('argv');

argv.mod({
    mod: 'factory',
    description: 'Create an Angular factory',
    options: [{
        name: 'path',
        short: 'p',
            type: 'path'

    }]
});


var args = argv.run();


console.log(args);

if (args.mod === 'factory') {

    var tpl = require('../index.js');
    tpl({'moduleName': 'fucker', 'factoryName':args.targets[0] }, args.options.path)
}
