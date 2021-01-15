 module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('organisation_types', [
      {
        name: 'Pharmacie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hopital',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transaction_types', null, {});
  }
}
