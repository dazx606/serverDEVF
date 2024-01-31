let users = require('../dataBase/database')

const getUsers = () => {
    return users
}

const createUser = (name, age, id) => {
    users.push({ name, age, id })
}

const deleteUser = (id) => {
    const newUsers = users.filter(usuario => usuario.id !== id)
    let usuarioEliminado = users.length !== newUsers.length
    users = newUsers
    return usuarioEliminado
}

const editUser = (id, name, age) => {
    const newUsers = users.map(usuario => (usuario.id === id ? { ...usuario, name, age: parseInt(age) } : usuario));
    console.log(id, name, age, newUsers)
    users = newUsers
    return users
}

const getUser = (id) => {
    let user = users.filter(usuario => usuario.id === id);
    return user

}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    editUser,
    getUser
}