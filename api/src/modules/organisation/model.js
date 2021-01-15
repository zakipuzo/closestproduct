'use strict'

module.exports = function(sequelize, DataTypes) {
  let Organisation = sequelize.define('organisations', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    organisationTypeId: {
      type: DataTypes.INTEGER
    },
  })

  Organisation.associate = function(models) {
    Organisation.belongsTo(models.OrganisationType)
  }

  return Organisation
}