const store = require('./store')


addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if(!user || !message){
            return reject('no data')
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        
        store.add(fullMessage)
        resolve(fullMessage)
    })
    
}

getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}

updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if(!id || !message){
            return reject ('Invalid Data')
        }

        const result = await store.updateText(id, message)

        resolve(result)
    })
}

deleteMessage = (id) => {
    return new Promise((resolve, reject) => {
        if(!id){
            return reject('Invalid Id')
        }
        store.remove(id)
        .then(() => {
            resolve()
        })
        .catch( e => {
            reject(e)
        })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}