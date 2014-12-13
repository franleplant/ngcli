var fs = require('fs');
var path = require('path');
var swig = require('swig');
var configByType = require('./config/byType.json');


var TEMPLATE_DIR = path.join(__dirname, 'templates');


/**
 * @name main
 * @description
 * Render angular component template of @param type
 * with data inside @param locals into @param pathTo
 *
 * You see the configuration parameters inside
 * config/byType.json
 *
 *
 * @param {String} type: Angular.js component
 * @param {Object} locals: template data
 * @param {String} pathTo: dest file path
 *
 */
function main(type, locals, pathTo) {
    var config = configByType[type];

    if (!config) {
        console.log('please select a valid angular component');
        return;
    }

    fs.writeFileSync(
            path.join(pathTo, locals.factoryName + config.suffix),
            swig.renderFile(path.resolve(TEMPLATE_DIR, config.template), locals)
        );


    fs.writeFileSync(
            path.join(pathTo, locals.factoryName + config.testSuffix),
            swig.renderFile(path.resolve(TEMPLATE_DIR, config.testTemplate), locals)
        );

}


module.exports = main;
