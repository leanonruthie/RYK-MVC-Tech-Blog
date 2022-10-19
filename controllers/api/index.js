// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const storyRoutes = require('./storyRoutes');

router.use('/users', userRoutes);
router.use('/stories', storyRoutes);

module.exports = router;
