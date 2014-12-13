#!/usr/bin/env node


var fs = require('fs');
var argv = require('argv');

argv.option({
    name: 'path',
    short: 'p',
        type: 'path'

});


var args = argv.run();


console.log(args);
var a = {'moduleName': 'fucker', 'factoryName':args.targets[0] }


var tpl = require('../index.js');


var c = tpl(a);

var log = fs.writeFileSync(args.options.path, c)


console.log(log);
