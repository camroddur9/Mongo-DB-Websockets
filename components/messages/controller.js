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

module.exports = {
    addMessage,
    getMessages
}