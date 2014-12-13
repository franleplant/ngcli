var fs = require('fs');
var swig = require('swig');

module.exports = function(locals, path) {
    swig.renderFile(__dirname + '/templates/factory.service.js', locals, function(err, output) {
        if (err) {
            throw err;
        }


        fs.writeFileSync(path, output)

    });
}
