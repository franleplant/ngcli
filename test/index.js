
var fs = require('fs');
var del = require('del');
var test = require('tape');
var main = require('../index.js');



test('Factory boilerplate generation', function(t) {
    t.plan(2);

    var locals = {
        factoryName: 'aFactory',
        moduleName: 'aModule'
    };

    main('factory', locals, '.');


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
