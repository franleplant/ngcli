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

if (argv.version || argv.v) {
    console.log('ngcli version ', package.version);
    return;
}

if (argv.help || argv.h) {
    console.log(fs.readFileSync(__dirname + '/help.txt', {encoding: 'utf-8'}));
    return;
}

var component_type = argv._[0];
var long_name = argv._[1];
var pathTo = argv._[2];

console.log(argv)
console.log(component_type, long_name, pathTo);


var parsedName = nameParser(long_name);

main({
    type: component_type,
    module: parsedName.module,
    name: parsedName.name,
    pathTo: pathTo
});
