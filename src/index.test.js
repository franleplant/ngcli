var fs = require('fs');
var del = require('del');
var test = require('tape');
var main = require('./index.js');

test('Factory: it should create boilerplate in the PWD when no path arg was specified', function(t) {
    t.plan(2);

    main({
        type: 'factory',
        module: 'aModule',
        name: 'aFactory'
    });


    t.ok( fs.existsSync('./aFactory.service.js'), 'it should create a src file');

    t.ok( fs.existsSync('./aFactory.service.spec.js'), 'it should create a test file');

    del(['./aFactory*'], function(err, deletedFiles) {
        if (err) {
            console.log(err)
            return;
        }

        console.log('Cleaning test files: ', deletedFiles.join(', '));
    });

});


test('Factory: it should create boilerplate in the path specified on the args', function(t) {
    t.plan(2);

    main({
        type: 'factory',
        module: 'aModule',
        name: 'aFactory',
        pathTo: '.'
    });


    t.ok( fs.existsSync('./aFactory.service.js'), 'it should create a src file');

    t.ok( fs.existsSync('./aFactory.service.spec.js'), 'it should create a test file');

    del(['./aFactory*'], function(err, deletedFiles) {
        if (err) {
            console.log(err)
            return;
        }

        console.log('Cleaning test files: ', deletedFiles.join(', '));
    });

});
