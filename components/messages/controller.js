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

getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list())
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

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}