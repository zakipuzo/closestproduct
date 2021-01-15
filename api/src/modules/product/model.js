'use strict'

// Product
module.exports = function(sequelize, DataTypes) {
    let Product = sequelize.define('products', {
        name: {
            type: DataTypes.STRING
        },
        slug: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.DECIMAL(10, 2)
        },
        type: {
            type: DataTypes.INTEGER
        },
        gender: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.TEXT
        },

        userId: {
            type: DataTypes.INTEGER
        },
        transactionTypeId: {
            type: DataTypes.INTEGER
        },
    })
    Product.associate = function(models) {
        Product.belongsTo(models.Category) 
        Product.hasMany(models.ProductImage, {as : 'productImages'})
        Product.belongsTo(models.User, {as : 'user'}) 
        Product.hasMany(models.Reservation, {as : "product" })
    }

    return Product
}