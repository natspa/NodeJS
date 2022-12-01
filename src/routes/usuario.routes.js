// RUTAS DE LOS USUARIOS

const router = require('express').Router()  // importar express.Router()

const usuarioController = require('../controllers/usuario.controller.js') // importar el archivo de controladores de usuarios

router.get('/prueba', usuarioController.prueba)  // acá va ruta a la que le tiene que pegar y lo que hace 
router.get('/', usuarioController.listar)
router.post('/', usuarioController.crear)
router.get('/:idUsuario', usuarioController.listarInfo)

module.exports = router;