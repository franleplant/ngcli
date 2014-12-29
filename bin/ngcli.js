#!/usr/bin/env node
/*
var complete = require('complete');
complete.list = ['factory', 'service'];
cofactorymplete.init();
*/

var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var nameParser = require('../src/nameParser.js');
var main = require('../src/index.js');
var package = require('../package.json');

var component_type = argv._[0];
var long_name = argv._[1];
var pathTo = argv._[2];

if (argv.version || argv.v) {
    console.log('ngcli version ', package.version);
    return;
}

if (argv.help || argv.h || !component_type) {
    console.log(fs.readFileSync(__dirname + '/help.txt', {encoding: 'utf-8'}));
    return;
}

var parsedName

try {
    parsedName = nameParser(long_name);
} catch(e) {
    console.log('Please specify a name for your component');
    return;
}


main({
    type: component_type,
    module: parsedName.module,
    name: parsedName.name,
    pathTo: pathTo
});
