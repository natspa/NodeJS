
// TIENE TODA LA CONFIGURACION DE LA API

const express = require('express') // importar dependencia/libreria express (framework para nodejs)
const routerConfig = require('./routes/index.routes.js') // importar el archivo de rutas 
const globalConstants = require('./const/globalConstants.js') // importar el archivo de constantes globales 
const logger = require('morgan') // importar dependencia/libreria morgan (para depuración y logs)
const  errorHandler = require('./middlewares/error') // importar el manejador de errores 
const createError = require('http-errors') // importar dependencia/libreria de errores http
// en lugar de "const" se podría usar "let"

const configuracionApi = (app) => { // configurar la api
    app.use(express.json()) // para que la api pueda recibir json
    app.use(express.urlencoded({extended: true})) // permite que express entienda formularios enviados por post 
    app.use (logger('dev')) //   
    return;
}; 

const configuracionRouter = (app) => { // configurar las rutas
    app.use('/api/', routerConfig.rutas_init()) // para acceder a las rutas de la api siempre deberá empezar con /api/
    app.use('/', routerConfig.rutas_auth())
    
    app.use(function (req, res, next) {
        next(createError(404)) // si no se encuentra la ruta, se envia un error 404
    })
      
    app.use(errorHandler) // configurar el middleware de manejo de errores

};

const init = () => {  // arrancar el servidor 
    const app = express() // crear una instancia de express
    configuracionApi(app) // configurar la api
    configuracionRouter(app)  // configurar las rutas
    app.listen(globalConstants.PORT) // escuchar en el puerto
    console.log('La aplicación se está escuchando en el puerto: ' + globalConstants.PORT) // mostrar en consola que se está ejecutando la aplicación en el puerto correspondiente
};

init(); // iniciar la aplicación

