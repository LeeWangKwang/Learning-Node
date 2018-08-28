var fs = require('fs');

try {
  fs.readFile('./apples2.txt','utf8', function(err,data){

    if(err) throw err;

    var adjData = data.replace(/[A|a]pple/g,'orange');

    fs.writeFile('./oranges.txt', adjData, function(err){

      if(err) throw err
    });
  });
} catch(err) {
  console.log(err.stack);
}
