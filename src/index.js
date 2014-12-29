var fs = require('fs');
var path = require('path');
var swig = require('swig');
var configByType = require('../config/byType.json');


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
 * @param {Object} opts Object containing the options.
 * The used fields are
 * - type
 * - pathTo
 * - module
 * - name
 *
 */
function main(opts) {
    var config = configByType[opts.type];

    if (!config) {
        console.log('please select a valid angular component');
        return;
    }


    var pathTo = opts.pathTo || './';

    fs.writeFileSync(
            path.join(pathTo, opts.name + config.suffix + '.js'),
            swig.renderFile(path.resolve(TEMPLATE_DIR, config.template), opts)
        );


    fs.writeFileSync(
            path.join(pathTo, opts.name + config.suffix + '.spec.js'),
            swig.renderFile(path.resolve(TEMPLATE_DIR, config.testTemplate), opts)
        );

}


module.exports = main;
