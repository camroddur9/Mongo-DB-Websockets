const Model = require('./model')

addMessage = (message) => {

    const myMessage = new Model(message)
    myMessage.save()
}

getMessages = async(filterUser) => {

    return new Promise((resolve, reject) => {
        let filter = {} 
        if(filterUser !== null){
            filter = {user: filterUser}
        }
        Model.find(filter)
        .populate('user')
        .exec((error, populated) => {
            if(error){
                return reject(error)
            }

            resolve(populated)
        })
    })

    
}

updateText = async(id, message) => {
    const foundMessage = await Model.findById(id)
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

removeMessage = (id) => {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage
}