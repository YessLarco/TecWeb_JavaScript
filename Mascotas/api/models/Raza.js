/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      
      nombre: {
            type: 'string',
            enum: ['Bulldog', 'Chihuahua', 'Pitbull'],
            required: true //permite verificar que se cree un solo registro de los elementos del enum, no se van a repetir
        },
      
      //Mascotas es el nombre en plural del modelo
      mascotas: {
          //collection -> Nombre del modelo en Sails
          collection: 'Mascota',
          //vias es el campo por el cual vamos a relacionar FOREIGN KEY
          via: 'idRaza'
          
      }

  }
};

