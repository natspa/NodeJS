// FUNCIONAMIENTO DE TODAS LAS RUTAS DE USUARIO

const models = require("../database/models/index")
const errors = require("../const/errors")
const bcrypt = require('bcryptjs') // para encriptar la contraseña

module.exports = {

    listar: async (req, res, next) => {
        try {
            const users = await models.usuario.findAll({
                attributes:{exclude:["password"]}
            }) 

            res.json({
                success: true,
                data: {
                    usuarios: users
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const user = await models.usuario.findOne({
                where: {
                    id: req.params.idUsuario
                },attributes:{exclude:["password"]}
            },
            )
            if (!user) return next(errors.UsuarioInexistente)

            res.json({
                success: true,
                data: {
                    usuario: user
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const user = await models.usuario.create(req.body)
       
            // encriptar contraseña con bcrypt
            user.password = bcrypt.hashSync(user.password, 10)  // esto anda 
            //user.password = user.cryptPassword(user.password) // esto no anda
            
            await user.save() // guardar el usuario

            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    prueba: async (req, res) => {
        try {
            console.log('Ejecutando prueba USUARIOS')
            
            res.json({
                message: "Ejecutando prueba USUARIOS"
            })

        } catch (err) {
            console.log(err)   
            return next(err)   
        }
    },
  
}