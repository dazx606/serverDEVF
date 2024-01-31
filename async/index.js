
const fs = require('fs');
const rutaArchivo = './textoa.txt';


function leerTextoCallBack() {
    fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
        if (!err) console.log('2) Contenido del archivo callBack:', data);
        else console.log('Manejo el error y continuo: ', err)
    })
};

function leerTextoPromesas(rutaArchivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(rutaArchivo, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}



function leerTextoThenCatch() {
    leerTextoPromesas(rutaArchivo)
        .then(respuesta => {
            console.log('4) Contenido del archivo ThenCatch:', respuesta);
        })
        .catch(err => {
            console.error('Manejo el error y continuo:', err);
        });
}


async function leerTextoAsync() {
    try {
        const texto = await leerTextoPromesas(rutaArchivo)
        console.log('6) Contenido del archivo AsyncAwait:', texto);
        console.log('que pasa si hay un error?')
        
    } catch (error) {
        console.log('Si hubo una falla: ', error)
    }
}


console.log('1) esto es una tarea sincrona');
leerTextoCallBack();
console.log('3) esto es otra tarea sincrona');
leerTextoThenCatch()
console.log('5) esto es la ultima tarea sincrona');
leerTextoAsync()
console.log('Termine!!!')
