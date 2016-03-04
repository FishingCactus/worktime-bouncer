var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello world');
});

/* Use PORT environment variable if it exists */
var port = process.env.PORT || 5000;
server = app.listen(port, function () {
  console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
});
