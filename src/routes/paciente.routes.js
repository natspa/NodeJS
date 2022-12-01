// RUTAS DE LOS PACIENTES

const router = require('express').Router()  // importar express.Router()

const pacienteController = require('../controllers/paciente.controller') // importar el archivo de controladores de pacientes

router.get('/prueba', pacienteController.prueba)  // acá va ruta a la que le tiene que pegar y lo que hace 
router.get('/', pacienteController.listar)
router.post('/', pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarInfo)

module.exports = router;