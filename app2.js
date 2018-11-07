// Para importar el modulo creado en el archivo multiplicar.js, se utiliza require

const { CreaArchivo } = require('./multiplicar/multiplicar');

// para leer parametros desde la terminal, podemos utilizar el objeto process que existe por defecto.
// de este objeto utilizamos la propiedad argv que devuelve el argumento ingresado. 
// utilizamos un split

console.log(process.config);
let argv = process.argv; // devuelve un arreglo con todos los argumentos
console.log('todo el argv', argv);
let parametro = argv[2]; // tomamos el tercer argumento inicia desde 0
console.log('todo el parametro', parametro);
let base = parametro.split('=')[1]; //realizamos un split y tomamos el segundo argumento del arreglo
console.log('la base', base);
CreaArchivo(base).then(mensaje => console.log(`Se creó el archivo ${mensaje}`))
    .catch(err => console.log(err));