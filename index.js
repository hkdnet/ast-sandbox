var esprima = require('esprima');
var fs = require('fs');
var util = require('util');

fs.readdir('./samples', function(err, files){
  if (err) throw err;
  files.forEach(function(fileName) {
    fs.readFile('./samples/' + fileName, function(err, code) {
      if(err) throw err;
      var ast = esprima.parse(code);
      fs.writeFile('./ast/' + fileName, util.inspect(ast, { depth: null }), function(err) {
        if(err) throw err;
        console.log('./ast/' + fileName);
      });
    });
  });
});
