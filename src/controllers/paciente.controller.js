// FUNCIONAMIENTO DE TODAS LAS RUTAS O ENDPOINTS DE PACIENTE

module.exports = {

    listar: async (req, res) => {
    },
    
    listarInfo: async (req, res) => {
    },

    crear: async (req, res) => {
    },

    prueba: async (req, res) => {
        try {
            console.log('Listado de Pacientes')
            
            res.json({
                message: "Listado de Pacientes"
            })

        } catch (err) {
            console.log(err)      
        }

    },

}