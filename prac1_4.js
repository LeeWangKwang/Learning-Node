var http = require('http');
//url option
var options = {
  host: 'localhost',
  port: 8124,
  path: '/?file=secondary',
  method: 'GET'
};

var processPublicTimeline = function(response) {
  //if it ends write data to file
  console.log('finished request');
};

for (var i = 0; i < 2000; i ++) {
  //request , close connection
  http.request(options, processPublicTimeline).end();
}
