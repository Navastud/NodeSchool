var filter = require('./Make It Modular part1.js');
var dir = process.argv[2];
var filterStr = process.argv[3];
filter(dir, filterStr, function(err, list){
  if (err) {
    return console.error('Se produjo un Error ', err)
  }
  list.forEach(function(file){
    console.log(file)
  })
  callback(err,list)
})
