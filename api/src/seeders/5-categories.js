'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories', [{
                name: 'Médicaments',
                node: '1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Matériel médical',
                node: '2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sang',
                node: '3',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            
        ], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('categories', null, {});
    }
}