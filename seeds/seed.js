const sequelize = require('../config/connection');
const {Dreamer,Helper} = require('../models');

const dreamerData = require('./dreamerData.json');
const helperData = require('./helperData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const dreamer = await Dreamer.bulkCreate(dreamerData, {
    individualHooks: true,
    returning: true,
  });

  const helper = await Helper.bulkCreate(helperData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();