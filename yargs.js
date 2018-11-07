/* la libreria de yargs, permite crear tanto la documentacion como la especificacion de los paramentros
a ser utilizados por consola.
yargs maneja un argumento distinto al argumento del process - argv -
Mediante Command podemos indicar tanto la descripcion como los parametros que queremos recibir por consola
todo el argv de yargs { _: [], '$0': 'app3.js' }

todo el argv de yargs { _: [ 'listar' ], base: 5, '$0': 'app3.js' }

todo el argv de process [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Temp\\Cursos_Udemy\\node\\03_basesNode\\app3.js',
  'listar',
  '--base=5' ]

  el Metodo command se puede especificar de la siguiente manera:
  ( nombreComando: string | string[], description: string,

  (method) yargs.Argv.command( command: string | string[], description: string, 
                               builder?: { [key: string]: yargs.Options;}, 
                               handler?: (args: yargs.Arguments) => void ): yargs.Argv (+6 overloads)
  
  el metodo help(), permite crear la ayuda a mostar por pantalla con el comando --help

*/
const argv = require('yargs').command('Listar', 'Imprime las tablas de multiplicar', {
        base: {
            demand: true,
            alias: 'b',
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).help()
    .argv;

// const { CreaArchivo } = require('./Tablas_Multiplicar/multiplicar');

// para leer parametros desde la terminal, podemos utilizar el objeto process que existe por defecto.
// de este objeto utilizamos la propiedad argv que devuelve el argumento ingresado. 
// utilizamos un split

let argv2 = process.argv; // devuelve un arreglo con todos los argumentos
console.log('todo el argv de yargs', argv);
// console.log('todo el argv de process', argv2);



// let parametro = argv[2]; // tomamos el tercer argumento inicia desde 0
// console.log('todo el parametro', parametro);
// let base = parametro.split('=')[1]; //realizamos un split y tomamos el segundo argumento del arreglo
// console.log('la base', base);
// CreaArchivo(base).then(mensaje => console.log(`Se creó el archivo ${mensaje}`))
//     .catch(err => console.log(err));