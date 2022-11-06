const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/cu', (req, res) => {
  res.send('rolaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
})

app.listen(process.env.PORT || 3000)