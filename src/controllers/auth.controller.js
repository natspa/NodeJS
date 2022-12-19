// TODAS LAS FUNCIONALIDADES DE AUTENTICACION

const models = require("../database/models/index")
const errors = require("../const/errors")
const bcrypt = require('bcryptjs') // importar dependencia para encriptar contraseña
const signJWT = require('../middlewares/singJWT') // importar signJWT para generar el TOKET

module.exports = {


    login: async (req, res, next) => {
        try {

            // verificar que el usuario exista solo comparando con el email viene en el body
            const user = await models.usuario.findOne({
                where: {
                    email: req.body.email
                }

            }) 

            var contraseniaCoincide = false

            if(user){  // el email existe


                console.log(req.body.password)
                console.log(user.password)
                console.log(bcrypt.compareSync(req.body.password, user.password))

                contraseniaCoincide = bcrypt.compareSync(req.body.password, user.password)  // No anda
                //contraseniaCoincide =(req.body.password==user.password) // Si anda
            } 

            if(!user || !contraseniaCoincide){  // devuevle error de autenticación por mail o pass
                return next(errors.CredencialesInvalidas)
            }

            // Si se autenticó correctamente se genera token para que navegue por toda la aplicacion
            res.json({
                success: true, 
                data:{
                    token: signJWT(user),
                    id: user.id    

                }

            })

        } catch (err) {
            return next(err)   
        }
    },

    registrarse: async (req, res, next) => {
        try {

            // encriptar la contraseña 
            req.body.password = bcrypt.hashSync(req.body.password, 10)
            const user = await models.usuario.create(req.body)
       
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


}

