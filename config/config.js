const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs').command('crear', 'Imprime las tablas de multiplicar', opts)
    .command('listar', 'Muestra por pantalla el resultado de la tabla de Multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}