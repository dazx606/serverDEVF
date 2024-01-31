
const fs = require('fs');
const filePath = './texto.txt';


function leerTextoCallBack() {
    const texto = fs.readFile(filePath, 'utf-8', (err, data) => {
        if (!err)  console.log('2) Contenido del archivo callBack:', data);
        else console.log('Error: ', err)
    })
};

function leerTextoPromesas(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}



function leerTextoThenCatch() {
    leerTextoPromesas(filePath)
    .then(data => {
        console.log('4) Contenido del archivo ThenCatch:', data);
    })
    .catch(err => {
        console.error('Error:', err);
    });
}


async function leerTextoAsync() {
    const data = await leerTextoPromesas(filePath)
    console.log('6) Contenido del archivo AsyncAwait:', data)
}


console.log('1) esto es una tarea sincrona')
leerTextoCallBack();
console.log('3) esto es una tarea sincrona')
leerTextoThenCatch()
console.log('5) esto es una tarea sincrona')
leerTextoAsync()
