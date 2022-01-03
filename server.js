const express = require('express')
const router = express.Router()

var app = express()

app.use(router);

router.get('/', (req, res) => {res.send('hallo get')})
router.post('/', (req, res) => {res.send('hallo post')})
router.delete('/', (req, res) => {res.send('hallo delete')})
router.patch('/', (req, res) => {res.send('hallo patch')})

app.listen('3000')
console.log('app listening on http://localhost:3000')
