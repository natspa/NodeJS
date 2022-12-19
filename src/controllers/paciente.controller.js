// TODAS LAS FUNCIONALIDADES DEL PACIENTE

const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {

    listar: async (req, res, next) => {
        try {
            const pacientes = await models.paciente.findAll()

            res.json({
                success: true,
                data: {
                    pacientes: pacientes
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                },
                include:[{
                    model: models.tratamiento,   // Pasar por tabla intermedia
                    include:[{
                        model: models.medico                    
                    }]                    
                }]
            })
            if (!paciente) return next(errors.PacienteInexistente)
            
            res.json({
                success: true,
                data: {
                    paciente: paciente
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const paciente = await models.paciente.create(req.body)  // Crea al paciente
            
            const relacion = await models.tratamiento.create({       // Crea la relación con  médico que ya tiene que existir
                pacienteId: paciente.id,                             // Envia el id del paciente recién creado
                medicoId: req.body.medicoId                          // Envia el recibido por el body
            })

            res.json({
                success: true,
                data: {
                    id: paciente.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

}