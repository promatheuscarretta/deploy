const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
  res.json({
    message: 'olá!'
  })
})

app.get('/cu', (req, res) => {
  res.send([{
    produto: 'celular'
  }, {
    produto: 'videogame'
  }, {
    produto: 'tv'
  }])
})

app.listen(process.env.PORT || 3000)