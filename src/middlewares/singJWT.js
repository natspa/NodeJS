// Estructura del TOKEN
// - ID DEL USUARIO
// - FIRMA (SECRETA)
// - TIEMPO EXPIRACIÓN

const jwt = require('jsonwebtoken') // dependencia para crear token
const globalConstants = require('../const/globalConstants')

module.exports = function (usuario) { // recibe el usuario por parametro

    if (usuario) {

        // Crear el token con los datos del usuario
        const token = jwt.sign({
            id: usuario.id
        },
            globalConstants.JWT_SECRET, // clave secreta para encriptar el token inventada definida en .env
            {
                expiresIn: '3000m' // expira en 3 horas
            }
        )
        return token // se devuelve el token
    } else {
        return null // si no hay usuario, se devuelve null
    }


}