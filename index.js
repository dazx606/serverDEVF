// index.js
const express = require('express');
const morgan = require('morgan')
const rutas = require('./rutas/rutas.js');

const app = express();
app.use(morgan('combined'))

// Usa las rutas definidas en el archivo routes.js
app.use(express.json()); 
app.use('/', rutas);

app.listen(3000, () => {
    console.log('app corriendo en el puerto 3000');
});

