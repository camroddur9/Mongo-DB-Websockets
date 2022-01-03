const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

var app = express()
app.use(bodyParser.json())
app.use(router);

router.get('/message', (req, res) => {
    res.send('Get message')
})
router.post('/message', (req, res) => {
    console.log(req.query)
    console.log(req.body)
    res.send('Added ' + req.body.text + ' message')
})

app.listen('3000')
console.log('app listening on http://localhost:3000')
