
// http module load
var http = require('http');
var fs = require('fs');

//http server create
http.createServer(function (req, res){
  
  // helloworld.js is opening
  fs.readFile('helloworld.js', 'utf8', function(err,data) {
    
    res.writeHead(200, {'content-type': 'text/plain'});
    if (err)
      res.write('Could not find or open file for reading\n');
    else
      
      // without error write jsfile to client
        res.write(data);
    res.end();
  });
}).listen(8124, function() {console.log('bound to port 8124')});

console.log('Server running on 8124');
