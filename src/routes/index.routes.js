// SE ENCARGA DE CONECTAR TODAS LAS RUTAS
const { Router} = require('express') // importar express     
const pacienteRoutes = require("./paciente.routes") // importar el archivo de rutas de pacientes
const medicoRoutes = require("./medico.routes") // importar el archivo de rutas de medicos
const rutas_init = () => { // aca se ponen todas las rutas que existen
    const router = Router() // crear una instancia de express.Router()
     // Acá van todas las rutas que creamos
    router.use("/pacientes", pacienteRoutes) // para acceder a las rutas de pacientes de la api siempre deberá empezar con /pacientes
    router.use("/medicos", medicoRoutes) // para acceder a las rutas de medicos de la api siempre deberá empezar con /medicos
    return router 
}
module.exports  = { rutas_init } // exportar el archivo de rutas de la api

