// 간단한 정적 파일 웹 서버

var http = require('http'),
  path = require('path'),
  fs = require('fs'),
  base = './public_html';

http.createServer(function (req, res) {

  pathname = base + req.url;
  console.log(pathname);

  fs.exists(pathname, function(exists) {
    if (!exists) {
      res.writeHead(404);
      res.write('Bad request 404\n');
      res.end();
    } else {
      res.setHeader('Content-Type', 'text/html');

      //200 상태-발견됨, 오류 없음
      res.statusCode = 200;
      //읽기 가능 스트림을 생성하고 pipe시킴
      var file = fs.createReadStream(pathname);
      file.on("open", function() {
        file.pipe(res);
      });
      file.on("error", function(err) {
        console.log(err);
      });
    }
  });
}).listen(8124);

console.log('Server running at 8124/');
