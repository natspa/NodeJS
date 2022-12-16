const Joi = require('joi') // importar Joi para validar los datos de entrada

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).optional().optional(),
    edad: Joi.number().optional(),
    medicoId: Joi.number().required(),
})

module.exports = {
    crearPaciente
}