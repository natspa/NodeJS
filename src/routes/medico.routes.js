// RUTAS DE LOS MEDICOS

const router = require('express').Router()  // importar express.Router()

const medicoController = require('../controllers/medico.controller.js') // importar el archivo de controladores de medicos

router.get('/prueba', medicoController.prueba)  // acá va ruta a la que le tiene que pegar y lo que hace 
router.get('/', medicoController.listar)
router.post('/', medicoController.crear)
router.get('/:idMedico', medicoController.listarInfo)

module.exports = router;