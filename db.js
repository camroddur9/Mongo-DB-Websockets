const db = require('mongoose')

db.Promise = global.Promise;

connect = async(url) => {
    
    await db.connect(url, {
        useNewUrlParser: true
    })
    .then(() => {console.log('[db] Conectada con éxito')})
    .catch(e => {console.log('[db] err', e)})
}

module.exports = connect