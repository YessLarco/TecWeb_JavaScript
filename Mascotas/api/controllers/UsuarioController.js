/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    //Para acceder a este método se lo debería hacer así : /Usuario/crearUsuario
     crearUsuario: function (req, res) {
        
         var parametros = req.allParams();
         
         console.log(parametros);
         
//         /Usuario/crearUsuario?nombres=Yessenia&apellidos:Larco
//         
//         POST 
//         
//         correo: yessenia.larco@gmail.com
         if(req.method == 'POST'){
         if(parametros.nombres&&parametros.apellidos){
             //crear usuario
             
              Usuario.create({
             nombres:parametros.nombres,
             apellidos: parametros.apellidos,
             correo: parametros.correo
         }).exec(function (error, usuarioCreado){
             
             
               if (error) { return res.serverError(); }
             
             sails.log.info(usuarioCreado);
               
             return res.ok(usuarioCreado);
         });
             
         } else {
             
             //bad request
             return res.badRequest('No envia todos los parametros');
         }
         } else {
             
             return res.badRequest('Metodo invalido');
             
         }
          
         
     },
    
    CrearUsuarioForm: function(req, res){
        
        var parametros = req.allParams();
         
         console.log(parametros);
         

         if(parametros.nombres&&parametros.apellidos){
             //crear usuario
             
              Usuario.create({
             nombres:parametros.nombres,
             apellidos: parametros.apellidos,
             correo: parametros.correo
         }).exec(function (error, usuarioCreado){
             
             
               if (error) { return res.serverError(); }
             
             sails.log.info(usuarioCreado);
               
             return res.view('vistas/home');
         });
             
         } else {
             
             //bad request
             return res.badRequest('No envia todos los parametros');
         }
        
    }
	
};

