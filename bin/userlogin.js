var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));

app.models.AppUser.login({username: "mcendon", password: "123456"}, function (err, accessToken) {
  if (err) throw err;
  console.log(accessToken);
})
