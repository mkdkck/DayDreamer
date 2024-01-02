const db = require('../models/index');
const bcrypt = require('bcrypt');

const initialData = {
  users: [
    { username: 'Colin', email: 'colin@mail.com', password: '123' },
    { username: 'Peter', email: 'peter@mail.com', password: '123' },
    { username: 'Ben', email: 'ben@mail.com', password: '123' },
  ],
  dreams: [
    {
        title: 'Flying in the Sky',
        description: 'I had a dream where I was flying above the clouds. It felt so liberating!',
        user_id: 1,
      },
      {
        title: 'Underwater Adventure',
        description: 'Explored the depths of the ocean and encountered amazing sea creatures.',
        user_id: 2,
      },
      {
        title: 'Time-Traveling Expedition',
        description: 'Traveled through time and witnessed historical events unfold before my eyes.',
        user_id: 1, 
      },
      {
        title: 'Meeting Extraterrestrial Beings',
        description: 'In my dream, I encountered friendly extraterrestrial beings who communicated through telepathy.',
        user_id: 2, 
      },
      {
        title: 'Exploring a Fantasy Realm',
        description: 'Wandered through a magical realm filled with mythical creatures and enchanted landscapes.',
        user_id: 3, 
      },
      {
        title: 'Inventing a Time-Travel Device',
        description: 'Dreamt that I invented a time-travel device and visited different eras in history.',
        user_id: 2, 
      },
      {
        title: 'Epic Space Odyssey',
        description: 'Embarked on an epic space journey, visiting distant planets and witnessing cosmic phenomena.',
        user_id: 1, 
      },
      {
        title: 'Befriending a Talking Animal',
        description: 'Had a dream where I befriended a talking animal with wise and insightful conversations.',
        user_id: 3, 
      },
  ],
};

const seedData = async () => {
  try {
    // Sync the models to the database
    await db.sequelize.sync({ force: true }); // Use force: true to recreate the tables

    const usersWithHashedPasswords = await Promise.all(
      initialData.users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10); // Adjust the salt rounds as needed
        return {
          ...user,
          password: hashedPassword,
        };
      })
    );

    // Create users and dreams
    const users = await db.User.bulkCreate(usersWithHashedPasswords, { returning: true });
    const dreams = await db.Dream.bulkCreate(
        initialData.dreams,{ returning: true }
    );

    // Log success message
    console.log('Data seeding successful');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedData();
