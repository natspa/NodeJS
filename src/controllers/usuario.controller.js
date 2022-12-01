// FUNCIONAMIENTO DE TODAS LAS RUTAS O ENDPOINTS DE USUARIO

module.exports = {

    listar: async (req, res) => {
    },
    
    listarInfo: async (req, res) => {
    },

    crear: async (req, res) => {
    },

    prueba: async (req, res) => {
        try {
            console.log('Ejecutando prueba USUARIOS')
            
            res.json({
                message: "Hola Mundo USUARIOS"
            })

        } catch (err) {
            console.log(err)      
        }

    },

}