var express = require('express')
var app = express()
var puerto = 5050

var usuarios = [
    {
        id: 1,
        nombre: 'Yesse',
        cedula: '1722741061'
    },
    
    {
        id: 2,
        nombre: 'Carlos',
        cedula: '112548569'
    },
    
    {
        id: 3,
        nombre: 'Juan',
        cedula: '125485691'
    }
]

var contador=3;

app.get('/TecnologiasWeb', function (req, res) {
    res.send('Hello World!')
})

app.get('/Usuario/:id',function(req, res){
        
    var idActual = req.params.id;
    
    //se busca en todo el arreglo de usuarios el id que se da como parámetro
    for(var i=0;i<usuarios.length;i++){
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    
    //responde que no existe el usuario luego de busar en el arreglo
    res.send('No existe el usuario!!!');
        })

app.get('/Usuario',function(req, res){
     
    console.log(req.query.nombre);
    
    console.log(req.query.cedula);
    
    if(!req.query.nombre){
        res.send('No envio el nombre')
        
    }
    
    if(!req.query.cedula){
        res.send('No envio la cedula')
    }
    
    var nuevoUsuario = {
        id:contador+1,
        nombre:req.query.nombre,
        cedula:req.query.cedula
    }
    
    usuarios.push(nuevoUsuario);
    
    contador = contador++;
    res.json(nuevoUsuario)
//    
//    console.log(req.param('nombre'));
//    
//    //Buscamos el parametro nombre
//    console.log(req.query.nombre);
//    
//    res.json(usuarios);
        })

app.post('/TecnologiasWeb', function (req, res) {
    //res.send('con post!!!!')

    var parametros = req.params;

    console.log(parametros);

    var usuario = {
        nombre: 'Yessenia',
        cedula: '1722741061'
    }



    res.json(usuario);

})

app.listen(puerto, function () {
    console.log('Example app listening on port '+puerto+'!')
})