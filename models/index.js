const User = require('./User');
const Doctor = require('./Doctor');

User.hasMany(Doctor, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Doctor };
