var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mysqlD;
ds.automigrate('person', function(err) {
  if (err) throw err;
  ds.discoverModelProperties('people', function(error, props) {
    console.log(props);
  });
});
