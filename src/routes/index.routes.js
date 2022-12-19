// SE ENCARGA DE CONECTAR TODAS LAS RUTAS 

const { Router} = require('express') // importar express     

const medicoRoutes = require("./medico.routes") // importar el archivo de rutas de medicos
const pacienteRoutes = require("./paciente.routes") // importar el archivo de rutas de pacientes
const usuarioRoutes = require("./usuario.routes")  // importar el archivo de rutas de usuario

const authRoutes = require("./auth.routes")           // importar el archivo de autenticacion
const decodeJWT = require("../middlewares/decodeJWT") // importar el archivo de encriptacion

// RUTAS INTERNAS
const rutas_init = () => { // aca se ponen todas las rutas que existen
    const router = Router() // crear una instancia de express.Router()
    
    // Acá van todas las rutas que creamos
    router.use("/pacientes", pacienteRoutes) // para acceder a las rutas de pacientes de la api siempre deberá empezar con /pacientes
    router.use("/medicos", medicoRoutes) // para acceder a las rutas de medicos de la api siempre deberá empezar con /medicos
    router.use("/usuarios", decodeJWT, usuarioRoutes)  // para acceder a las rutas de los usuarios de la api siempre deberá empezar con /usuarios
        
    return router // retorna el router
}

// RUTAS EXTERNAS (se hace en otra instancia de router de express para generar un nivel más de seguridad)
const rutas_auth = () => { // aca se ponen todas las rutas externas
    const router = Router() // crear una instancia de express.Router()
    
    router.use("/auth", authRoutes) // para acceder a las rutas de pacientes de la api siempre deberá empezar con /pacientes

    return router 
}

module.exports  = { rutas_init, rutas_auth } // exportar la función de rutas de la api 

