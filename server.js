const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')

const router = require('./network/routes')

db('mongodb://crodrig53090:pass@mongodbwebsockets-shard-00-00.3hk85.mongodb.net:27017,mongodbwebsockets-shard-00-01.3hk85.mongodb.net:27017,mongodbwebsockets-shard-00-02.3hk85.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-czio4j-shard-0&authSource=admin&retryWrites=true&w=majority')

var app = express()
app.use(bodyParser.json())
//app.use(router);
router(app)

app.use('/app', express.static('public'));

app.listen('3000')
console.log('app listening on http://localhost:3000')
