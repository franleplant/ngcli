console.log(__dirname);

var fs = require('fs');
var _ = require('lodash');


var t = fs.readFileSync(__dirname + '/templates/factory.service.js', {enconding: 'utf-8'});



module.exports = _.template(t)
