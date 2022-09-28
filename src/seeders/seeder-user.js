'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Hi',
        lastName: 'Hi',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: '123@abc',
        address: 'HCM city',
        gender: true,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
