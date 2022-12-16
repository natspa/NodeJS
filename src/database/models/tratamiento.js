'use strict'

module.exports = (sequelize, DataTypes) => {

  let Tratamiento = sequelize.define('tratamiento', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true, // elimina los registros de forma logica
    freezeTableName: true, // no va a modificar el nombre de la tabla a plural
  })

  Tratamiento.associate = models => { // relaciona las tablas de la base de datos 
    Tratamiento.belongsTo(models.paciente)
    Tratamiento.belongsTo(models.medico)
  }

  return Tratamiento
}