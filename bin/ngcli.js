#!/usr/bin/env node

var argv = require('argv');

argv.version('v0.0.0');
argv.info('info string!');

argv.mod({
    mod: 'factory',
    description: 'Create an Angular factory',
    options: [{
        name: 'path',
        short: 'p',
        type: 'path',
        description: 'description blah blah'

    }, {
        name: 'module',
        short: 'm',
        type: 'string',
        description: 'description blah blah'

    }]
});


var args = argv.run();
console.log(args);


var locals = {
    'moduleName': args.options.module || 'myModule',
    'factoryName':args.targets[0]
}

var main = require('../index.js');

main(args.mod, locals, args.options.path);
