'use strict'

// cart
module.exports = function(sequelize, DataTypes) {
  let OrganisationType = sequelize.define('organisation_types', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  })

  OrganisationType.associate = function(models) {
     
  }

  return OrganisationType
}