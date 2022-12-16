const errors = require('../const/errors')

module.exports = function (err, req, res, next) {

  let response = {
    success: false,
    error: {
      code: err.code || 500, // si no hay un codigo de error, se asigna 500
      message: err.message || 'Internal server error' // si no hay un mensaje de error, se asigna 'Internal server error'
    }
  }

  // si el error es de Joi, es decir, si el error es de validacion
  if (err.isJoi) {
    let validationErrorType = err.details[0].type // obtener el tipo de error de validacion
    let errorKey = 'ValidationError' 
    if (validationErrorType === 'any.required') { // si el error es de validacion de campos requeridos
      errorKey = 'FaltanCampos'
    }
    response.error.code = errors[errorKey].code // asignar el codigo de error correspondiente
    response.error.message = errors[errorKey].message // asignar el mensaje de error correspondiente
  }


  // Si el error es de NotFound
  if (err.message === 'Not Found') { 
    response.error.code = 404 
    response.error.message = 'Not Found'
  }

   // CORS not allowed error
   if (err.message === 'Not allowed by CORS') { 
    response.error.code = 403 
  }

   // Sequelize conection error with the database
   if (err.name === 'SequelizeConnectionError') { 
    response.error.code = 500 
    response.error.message = 'Internal server error'
  }

  // Sequelize validation error (from the model)
  if (err.name === 'SequelizeValidationError') {
    let validationError = err.errors[0]
    response.error.code = errors['ValidationError'].code 
    response.error.message = validationError.message
  }

   // Sequelize error produced when a value is out of the range of the defined type
   if (err.name === 'SequelizeDatabaseError' && err.message.indexof('out of range') >= 0) {
    response.error.code = errors['ValidationError'].code 
    response.error.message = errors['ValidationError'].message
  }

  res.status(200).json(response) // envia la respuesta al cliente
}