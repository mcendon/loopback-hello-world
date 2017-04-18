var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
//var ds = app.datasources.mysqlD;
var ds = app.datasources.mongodb1;

var models = [
    'AccessToken',
    'AppUser',
    'person']

for (var i in models) {
  ds.automigrate(models[i], function(err) {
    if (err) throw err;
  });
}

console.log('Done.');
