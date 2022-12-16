const Joi = require('joi');

let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).optional().optional(),
    especialidad: Joi.string().optional(),
})

module.exports = {
    crearMedico
}