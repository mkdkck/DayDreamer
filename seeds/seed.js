const sequelize = require('../config/connection');
const { ,  } = require('../models');

const helperData = require('./helperData.json');
const dreamerData = require('./dreamerData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(helperData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of dreamerData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();