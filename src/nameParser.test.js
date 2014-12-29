var test = require('tape');
var nameParser = require('./nameParser.js');

test('nameParser should handle "modA.componentName" correctly', function(t) {
    t.plan(2);
    var result = nameParser('modA.modB.componentName');

    t.equal(result.module, 'modA.modB');
    t.equal(result.name, 'componentName');
});


test('nameParser should handle "componentName" correctly', function(t) {
    t.plan(2);
    var result = nameParser('componentName');

    t.equal(result.module, 'unknownModule');
    t.equal(result.name, 'componentName');
});


test('nameParser should throw an error with bad input', function(t) {
    t.plan(2);
    t.throws(function() { nameParser() });
    t.throws(function() { nameParser(123) });
});
