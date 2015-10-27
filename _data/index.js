var fs = require('fs');

fs.readFile('sose-15.json', 'utf8', function(err, data){
  if(err !== null) return;

  var json = JSON.parse(data);
  // console.log(json);
  json.students.forEach(function(e, i ,a){
    console.log(e.author);
  });
});