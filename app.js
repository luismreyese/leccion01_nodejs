// Para importar el modulo creado en el archivo multiplicar.js, se utiliza require
const multiplicar = require('./multiplicar/multiplicar'); // la extension .js no es necesaria pues solo se trabaja
// con archivos javaScript.
// Es posible utilizar la destructuración para tener la propiedad que contiene la función.

const { CreaArchivo } = require('./multiplicar/multiplicar');

let base = 2;

multiplicar.CreaArchivo(base).then(mensaje => console.log(`Se creó el archivo ${mensaje}`))
    .catch(err => console.log(err));

base += 1;
CreaArchivo(base).then(mensaje => console.log(`Se creó el archivo ${mensaje}`))
    .catch(err => console.log(err));