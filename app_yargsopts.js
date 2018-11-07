/* para optimizar el codigo y evitar tener parametros de configuracion en la aplicacion, 
se cera un archivo config el cual tiene los comandos a ser utilizados
*/
const colors = require('colors');
const colorsf = require('colors/safe');
const argv = require('./config/config').argv;
const { CreaArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'crear':

        CreaArchivo(argv.base, argv.limite).then(mensaje => console.log(`Se creó el archivo ${colorsf.blue(mensaje)}`))
            .catch(err => console.log(colorsf.read(err)));
        break;

    case 'listar':

        listarTabla(argv.base, argv.limite).catch(err => console.log(colorsf.magenta(err)));
        break;

    default:
        console.log('Comando no reconocido'.rainbow);
        break;
}