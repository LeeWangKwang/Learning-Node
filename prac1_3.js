var http = require('http');
var fs = require('fs');
var counter = 0;
//write number
function writeNumbers(res) {

  //increase number, write to client
  for (var i = 0; i < 100; i++) {
    counter++;
    res.write(counter.toString() + '\n');
  }
}

//create server
http.createServer(function (req, res) {
  var query = require('url').parse(req.url).query;
  app = require('querystring').parse(query).file + ".txt";

  // content header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // write num
  writeNumbers(res);

  //timer
  setTimeout(function() {

    console.log('opening ' + app);

    fs.readFile(app, 'utf8', function(err, data) {
      if(err)
        res.write('Could not find or open file for reading\n');
      else {
        res.write(data);
      }
      //response completed
      res.end();
    });
  },2000);
}).listen(8124);

console.log('Server running at 8124');
