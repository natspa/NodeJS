// FUNCIONAMIENTO DE TODAS LAS RUTAS DE MEDICO

const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {

    listar: async (req, res, next) => {
        try {
            const medicos = await models.medico.findAll({
                include: [{
                    model: models.tratamiento,
                    include: [{
                        model: models.paciente
                    }]
                }]
            });

            res.json({
                success: true,
                data: {
                    message: "Listado de Médicos",
                    medicos: medicos
                }
            })

        } catch (err) {
            console.log(err)  
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const medico = await models.medico.create(req.body)

            res.json({
                succes: true,
                message: "Médico creado con éxito",
                data: {
                    id: medico.id
                }
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const medico = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                }
            })
            if (!medico) return next(errors.MedicoInexistente)

            res.json({
                success: true,
                data: {
                    medico: medico
                }
            })

        } catch (err) {
            console.log(err)  
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const medico = await models.medico.create(req.body)

            res.json({
                success: true,
                data: {
                    id: medico.id
                }
            })

        } catch (err) {
            console.log(err)  
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const id = req.params.idMedico;
            const medico = await models.medico.findOne({
                where: {
                    id: req.params.idMedico,

                },
                include: [{
                    model: models.tratamiento,
                    include: [{
                        model: models.paciente
                    }]
                }]
            });

            if (!medico) return next(errors.MedicoInexistente)

            res.json({
                succes: true,
                message: "Informacion del Médico " + id,
                data: {
                    medico: medico
                }
            })
        } catch (err) {
            console.log(err)
        }
    },

    // Listo los tratamientos del medico logueado
    listaTratamientos: async (req, res, next) => {

        try {
            const { id } = res.locals.usuario;

            // Busca el médico
            const medico = await models.medico.findOne({
                where: {
                    usuarioId: id
                },
            });

            if (!medico) {
                return next(errors.NoEsMedico)
            } else {
                const tratamientos = await models.tratamiento.findAll({
                    where: {
                        medicoId: medico.id
                    },
                    include: [{
                        model: models.paciente,
                        include: [{
                            model: models.usuario
                        }]
                    }]
                });

                return res.json({
                    succes: true,
                    message: "Listado de tratamientos del médico: " + medico.id,
                    data: {
                        tratamientos: tratamientos
                    }
                });
            }

      } catch (err) {
            console.log(err)
            next(err)
        }
    },

    prueba: async (req, res) => {
        try {
            console.log('Ejecutando prueba MÉDICOS')
            
            res.json({
                message: "Ejecutando prueba MÉDICOS"
            })

        } catch (err) {
            console.log(err)   
            return next(err)   
        }
    },

}