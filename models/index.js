// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
// Don't forget the Leave Comment functionality in Homepage and Update Functionality in StoryById Page
const User = require('./User');
const Story = require('./Story');

User.hasMany(Story, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Story.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Story };
