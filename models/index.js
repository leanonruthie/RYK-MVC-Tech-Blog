// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project and Previous Assignments
// Reminder: We were practicing this for several weeks now and utilizing proper validations and recognizing how they ar all interconnected is clutch in preventing errors - especially not forgetting how primary key/foreign keys are laid out. See below addition of Comment here

const User = require('./User');
const Story = require('./Story');
const Comment = require('./comment')

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
