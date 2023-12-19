const db = require('../models'); // Import your models

// Function to test CRUD operations
async function testCRUD() {
    try {
        // CREATE
        const newUser = await db.User.create({
            username: 'testUser',
            email: 'test@example.com',
            password: 'password123'
        });
        console.log('Created User:', newUser);

        // READ
        const foundUser = await db.User.findOne({ where: { username: 'testUser' } });
        console.log('Found User:', foundUser);

        // UPDATE
        await foundUser.update({ email: 'updated@example.com' });
        console.log('Updated User:', foundUser);

        // DELETE
        await foundUser.destroy();
        console.log('Deleted User');

        // Close the database connection
        db.sequelize.close();
    } catch (error) {
        console.error('Error during CRUD operations:', error);
    }
}

// Run the test
testCRUD();
