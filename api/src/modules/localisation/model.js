'use strict'

// cart
module.exports = function(sequelize, DataTypes) {
  let Localisation = sequelize.define('localisations', {
    userId: {
      type: DataTypes.INTEGER
    },
    latitude: {
      type: DataTypes.FLOAT
    },
    longitude: {
      type: DataTypes.FLOAT
    },
    type: {
      type: DataTypes.STRING
    },
  
  })

  Localisation.associate = function(models) {
    Localisation.belongsTo(models.User) 
  }

  return Localisation
}