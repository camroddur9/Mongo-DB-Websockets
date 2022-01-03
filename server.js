const express = require('express')

var app = express()

app.use('/', (req, res) => res.send('Hallo'))

app.listen('3000')
console.log('app listening on http://localhost:3000')
