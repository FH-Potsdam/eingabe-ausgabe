var fs = require('fs');
var mv = require('mv');

var obj;
var image_paths = [];

fs.readFile('../_data/wise-1415.json', 'utf8', function(err, data) {
  if (err) {

    throw err;
  } else {
    obj = JSON.parse(data);
    console.log(obj.students[0]);
    for (var i = 0; i < obj.students.length; i++) {
      var algo = obj.students[i].algorithm;
      algo.images.forEach(function(element, index, array) {
        image_paths.push(element);
      }); //jshint ignore:line
      algo.thumb.forEach(function(element, index, array) {
        image_paths.push(element);
      }); //jshint ignore:line


      var crwd = obj.students[i].crowd;
      image_paths.push(crwd.image);
      image_paths.push(crwd.thumb);

      var bits = obj.students[i].bits;
      bits.images.forEach(function(element, index, array) {
        image_paths.push(element);
      }); //jshint ignore:line
      bits.thumb.forEach(function(element, index, array) {
        image_paths.push(element);
      }); //jshint ignore:line
    }
    console.log(image_paths);

    for(var j = 0; j < image_paths.length;j++){
      mv("../images/" + image_paths[j], "../images/wise-1415/" + image_paths[j],{mkdirp: true}, function(err) {
        if (err) throw err;

      });

    }
  }


});