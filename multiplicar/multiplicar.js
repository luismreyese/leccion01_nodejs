let fs = require('fs');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }
        if (!Number(limite) || Number(limite) < 0) {
            reject(`${limite} no es un numero natural`);
            return;
        }

        for (let index = 1; index <= limite; index++) {

            console.log(`${ base } * ${ index } = ${ base * index }`);
        };
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }
        if (!Number(limite) || Number(limite) < 0) {
            reject(`${limite} no es un numero natural`);
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += (`${ base } * ${ index } = ${ base * index }\n`);
        }

        fs.writeFile(`Tablas_Multiplicar/archivo-tabla${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(` ${base}.txt`);

        });
    });
}

// Permite declarar todas las funciones y/o Clases que deben ser exportadas para utilizacion dentro de otro archivo
// en la aplicacion.
module.exports = {
    CreaArchivo: crearArchivo,
    listarTabla
}