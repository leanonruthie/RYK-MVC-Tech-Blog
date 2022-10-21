// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
const sequelize = require('../config/connection');
const { User, Story } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const story of storyData) {
    await Story.create({
      ...story,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
