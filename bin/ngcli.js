#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var swig = require('swig');
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

    }]
});


var args = argv.run();


console.log(args);

if (args.mod === 'factory') {

    factory({'moduleName': 'fucker', 'factoryName':args.targets[0] }, args.options.path)
}


function factory(locals, pathTo) {
    var name = args.targets[0];
    var suffix ='.service.js';
    var suffixTest = '.service.spec.js';

    var p = path.join(pathTo, name + suffix);
    var pt = path.join(pathTo, name + suffixTest);



    var a  = swig.renderFile(path.resolve(__dirname, '../templates/factory.service.js'), locals);
    fs.writeFileSync(p, a)
    a  = swig.renderFile(path.resolve(__dirname, '../templates/factory.service.spec.js'), locals);
    fs.writeFileSync(pt, a)

}
