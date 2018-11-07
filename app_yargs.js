const argv = require('yargs').command('crear', 'Imprime las tablas de multiplicar', {
        base: {
            demand: true,
            alias: 'b',
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).command('listar', 'Muestra por pantalla el resultado de la tabla de Multiplicar', {
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

const { CreaArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'crear':

        CreaArchivo(argv.base, argv.limite).then(mensaje => console.log(`Se creó el archivo ${mensaje}`))
            .catch(err => console.log(err));
        break;

    case 'listar':

        listarTabla(argv.base, argv.limite).catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}