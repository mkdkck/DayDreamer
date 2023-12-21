'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Seed data for Users table
    await queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'hashedpassword123', // In a real app, ensure this is a hashed password
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'jane_doe',
        email: 'jane@example.com',
        password: 'hashedpassword456', // In a real app, ensure this is a hashed password
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

    // Seed data for Dreams table
    await queryInterface.bulkInsert('Dreams', [
      {
        title: 'Create a Virtual Reality Game',
        description: 'Develop an immersive VR game using Unity.',
        user_id: 1, // Assuming this user ID exists in Users table
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Build a Personal Finance App',
        description: 'Create a mobile app to manage personal finances and track expenses.',
        user_id: 2, // Assuming this user ID exists in Users table
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Revert seed commands
    await queryInterface.bulkDelete('Dreams', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
