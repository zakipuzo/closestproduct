'use strict'

// reservation
module.exports = function(sequelize, DataTypes) {
  let Reservation = sequelize.define('reservations', {
    userId: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.INTEGER
    },
    timestamp: {
      type: DataTypes.DATE
    },
  })

  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User)
    Reservation.belongsTo(models.Product)
  }

  return Reservation
}