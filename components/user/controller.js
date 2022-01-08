const store = require('./store')

addUser = (name) => {
    if(!name){
        return Promise.reject("Invalid name")
    }
    const user = {
        name: name
    }
    return store.add(user)
}

getUser = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

updateUser = (id,name) => {
    return new Promise(async (resolve, reject) => {
        if(!id || !name){
            return reject("Invalid Data")
        }
        const result = await store.updateUser(id, name)
        resolve(result)
    })
}

deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        if(!id){
            return reject("Invalid Id")
        }
        store.remove(id)
        .then(() => {
            resolve()
        })
        .catch(e => {
            reject(e)
        })
    })
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}