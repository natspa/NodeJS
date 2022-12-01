// FUNCIONAMIENTO DE TODAS LAS RUTAS O ENDPOINTS DE MEDICO

module.exports = {

    listar: async (req, res) => {
    },
    
    listarInfo: async (req, res) => {
    },

    crear: async (req, res) => {
    },

    prueba: async (req, res) => {
        try {
            console.log('Listado de Médicos')
            
            res.json({
                message: "Listado de Médicos"
            })

        } catch (err) {
            console.log(err)      
        }

    },

}