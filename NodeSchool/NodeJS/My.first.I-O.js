var fs = require('fs');
var contenido = fs.readFileSync(process.argv[2]);
var linea = contenido.toString().split('\n').length - 1;
console.log(linea);
