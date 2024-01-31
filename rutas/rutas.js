const express = require('express');

const { getUsers, createUser, deleteUser, editUser, getUser } = require('../controladores/controlador.js')

const router = express.Router();

router.get('/', function (req, res) {
    res.send('hola, yo soy la respuesta del servidor editado x2');
});

router.get('/users/:id', function (req, res) {
    // utiliza el controlador para traer los datos
    //const users = getUsers()
    // enviar una respuesta
    const {id} = req.params
    res.send({ id });
});


router.get('/users', function (req, res) {
    // utiliza el controlador para traer los datos
    const users = getUsers()
    // enviar una respuesta
    res.json({ users });
});

router.post('/users', function (req, res) {
    // Obtener los datos del cuerpo de la solicitud

    const { name, age, id } = req.body;


    // Validar si se proporcionaron name, age y id en la solicitud
    if (!name || !age || !id) {
        return res.status(400).json({ error: 'Falta el nombre, la edad o el id en la solicitud' });
    }

    // Llamar al controlador para agregar un nuevo usuario
    createUser(name, age, id);

    // Enviar una respuesta exitosa
    res.status(201).json({ message: 'Usuario agregado con éxito' });
});

router.put('/users/:id', function (req, res) {

    const { id } = req.params;
    const { name, age } = req.body;

    let usuarioEditado = editUser(parseInt(id), name, age);

    res.json({ users: usuarioEditado });
});

router.delete('/users/:id', function (req, res) {

    const { id } = req.params;

    let usuarioEliminado = deleteUser(parseInt(id))

    res.send({ mensaje: usuarioEliminado ? 'usuario eliminado con éxito' : 'usuario no encontrado' })

});

router.get('/users/:id', function (req, res) {
    const { id } = req.params;

    const user = getUser(parseInt(id))
    // enviar una respuesta
    res.json({ user });
});






module.exports = router;