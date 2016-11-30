var express = require('express')
var app = express()

app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hello World!')
})

app.post('/TecnologiasWeb', function (req, res) {
  res.send('con post!!!!')
  
  console.log('Lo que tengo en el REQUEST es: ')
  console.log(req)
  console.log('Lo que tengo en el RESPONSE es: ')
  console.log(res)
  
  console.log('Lo que tengo en el CABECERAS DE REQUEST es: ')
  console.log(req.headers)
  console.log('Lo que tengo en el CABECERAS DE RESPONSE es: ')
  console.log(res.headers)
  
  res.send('nombre: Yessenia, cedula:1722741061')
  
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

