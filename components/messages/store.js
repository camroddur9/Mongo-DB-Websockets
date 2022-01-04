const db = require('mongoose')
const Model = require('./model')

const uri = 'mongodb://crodrig53090:<pass>@mongodbwebsockets-shard-00-00.3hk85.mongodb.net:27017,mongodbwebsockets-shard-00-01.3hk85.mongodb.net:27017,mongodbwebsockets-shard-00-02.3hk85.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-czio4j-shard-0&authSource=admin&retryWrites=true&w=majority'

db.Promise = global.Promise;
db.connect(uri, {
    useNewUrlParser: true
})
.then(() => {console.log('[db] Conectada con éxito')})
.catch(e => {console.log('[db] err', e)})

addMessage = (message) => {
    //list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

getMessages = async() => {
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessages
}