'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
    User.hasOne(models.Cart)
    User.hasMany(models.Product , {as : "sellProducts"})
    User.hasMany(models.Product , {as : "buyProducts"})
    User.hasMany(models.SavedProduct, { as : "savedProducts" })
  }

  return User
}