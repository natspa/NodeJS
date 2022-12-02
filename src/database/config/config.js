// importar el archivo de constantes globales
const globalConstants = require('../../const/globalConstants') 

module.exports = {

  "development": {
    "username": "root",
    "password": "1234",
    "database": "database_desa",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": false 
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": false 
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
