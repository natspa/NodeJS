// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");
const bcrypt = require('bcryptjs') // para encriptar la contraseña

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "8"
                },
                defaults: {
                    nombre: "campeon",
                    apellido: "mundial",
                    email: "mail@email.com",
                    edad: 53,
                    password: bcrypt.hashSync('password', 10) 

                }
            }),
        ])
    },
};