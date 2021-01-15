'use strict';

const params = require('../config/params');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', [{
                name: "Doliprane",
                slug: 'doliprane',
                description: "Doliprane", 
                price: 25.00, 
                image: '/images/stock/huile-olive.jpg',
                userId: 1, 
                category: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('products', null, {});
    }
}