// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project and Previous Assignments
// Reminder: Don't forget additional commentRoutes!

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const storyRoutes = require('./storyRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/stories', storyRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
