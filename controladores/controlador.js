const users = require('../dataBase/database')

const getUsers = () => {
    return users
}

const createUser = (name, age, id) => {
    users.push({ name, age, id })
}

module.exports = {
    getUsers,
    createUser
}