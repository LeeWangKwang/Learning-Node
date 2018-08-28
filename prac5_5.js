var fs = require('fs');

var counter = 0;

var writeStream = fs.createWriteStream('./log.txt',
    {'flags' : 'a',
    'encoding' : 'utf8',
    'mode' : 0666});

try {
  fs.readdir('./data/', function(err, files) {

    files.forEach(function(name) {

      fs.readFile('./data/' + name, 'utf8', function(err, data) {

        if (err) throw err;
        var adjData = data.replace(/somecompany\.com/g,'burningbird.net');

        fs.writeFile('./data/' + name, adjData, function(err) {

          if(err) throw err;

          writeStream.write('changed ' + name + '\n', 'utf8', function(err) {

            if(err) throw err;
            console.log('finished ' + name);
            counter++;
            if ( counter >= files.length)
              console.log('all done');
          });
        });
      });
    });
  });
}catch(err) {
  console.error(util.inspect(err));
}
