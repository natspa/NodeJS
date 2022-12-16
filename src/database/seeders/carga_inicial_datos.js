// SEEDER PARA CARGAR PACIENTES EN LA BASE DE DATOS

'use strict';

console.log('PASO 1')

const models = require("../models/index");

console.log('PASO 2')
module.exports = {
   
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.paciente.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "JP",

                    apellido: "Borthiry",
                    email: "jpb@mail.com",
                    edad: 54
                }
            }),
            models.paciente.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Vidurrin",
                    apellido: "BB",
                    email: "bbVidurrin@mail.com",
                    edad: 13
                }
            }),
            models.paciente.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    nombre: "Nat",
                    apellido: "Spa",
                    email: "NatSpa@mail.com",
                    edad: 49
                }
            })
        ])
    },
    

    down:(queryInterface, Sequelize) => {
        /* 
      Add reverting commands here. 
      Return a promise to correctly handle asynchronicity.
      
      Example:
      return queryInterface.dropTable('pacientes')
      */
    }
     
};  


