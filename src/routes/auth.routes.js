// RUTAS PARA AUTENTICAR

const router = require('express').Router()  // importar express.Router()
const authController = require('../controllers/auth.controller') // importar el archivo de controladores de autenticacion
const validate = require('../middlewares/validate')
const authScheme = require('../middlewares/schemes/auth.scheme')

router.post('/login', validate(authScheme.login), authController.login)  // acá va ruta a la que le tiene que pegar y lo que hace 
router.post('/registrarse', authController.registrarse)

module.exports = router