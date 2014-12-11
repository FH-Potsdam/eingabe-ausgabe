var fs = require('fs');
var obj;
fs.readFile('../_data/crowd.json', 'utf8', function (err, data) {
  if (err){

  throw err;
  }else{
  obj = JSON.parse(data);
  for (var i = 0; i < obj.projects.length; i++) {
    var author = obj.projects[i].author;
    console.log(author);
  }

  }

});