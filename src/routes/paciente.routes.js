// RUTAS DE LOS PACIENTES

const router = require('express').Router()  // importar express.Router()
const pacienteController = require('../controllers/paciente.controller') // importar el archivo de controladores de pacientes
const validate = require('../middlewares/validate') // importar la funcion de validación del esquema de datos que viene por el body
const pacienteScheme = require('../middlewares/schemes/paciente.scheme') // importar el esquema del paciente 

//router.get('/prueba', pacienteController.prueba)  // acá va ruta a la que le tiene que pegar y lo que hace 
router.get('/', pacienteController.listar)
router.post('/', validate(pacienteScheme.crearPaciente), pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarInfo)

module.exports = router;