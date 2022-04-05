const sequelize = require('../config/connection');
const { User, Doctor } = require('../models');

const userData = require('./userData.json');
const doctorData = require('./doctorData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const doctor of doctorData) {
    await Doctor.create({
      ...doctor,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
