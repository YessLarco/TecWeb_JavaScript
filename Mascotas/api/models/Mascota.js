/**
 * Mascota.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      
      nombre: {
            type: 'String',
            required:true
        },
      
        fechaNacimiento: {
            type:'date'
        },
      
        paisNacimiento: {
            type: 'String',
            enum:['Ecuador','Colombia','Peru']
        },
      
      //idRaza es el nombre del foreign key
      idRaza: {
          //model es el nombre de la tabla padre
          model: 'Raza',
          //required es OPCIONAL si no queremos registros huerfanos de raza
          required: true
      }

  }
    
};

