// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project

const User = require('./User');
const Story = require('./Story');
const Comment = require('./Comment')

User.hasMany(Story, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Story.belongsTo(User, {
  foreignKey: 'user_id'
});

Story.hasMany(Comment, {
  foreignKey: 'story_id'
});

Comment.belongsTo(Story, {
  foreignKey: 'story_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

module.exports = { User, Story, Comment };
