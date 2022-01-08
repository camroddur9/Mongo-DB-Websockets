const Model = require('./model')

addUser = (user) => {
    const myUser = new Model(user)
    return myUser.save()
}

getUser = async() => {
    const users = await Model.find()
    return users
}

updateUser = async(id, name) => {
    const foundUser = await Model.findById(id)
    foundUser.name = name
    const newUser = await foundUser.save()
    return newUser
}

removeUser = (id) => {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addUser,
    list: getUser,
    updateUser: updateUser,
    remove: removeUser
}