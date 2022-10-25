// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
// Don't forget to add Comment functionality!

const router = require('express').Router();
const { Comment, Story, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all stories and JOIN with user data
    const storyData = await Story.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const stories = storyData.map((story) => story.get({ plain: true }));
    res.render('homepage', {
      stories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/story/:id', async (req, res) => {
  try {
    const storyData = await Story.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
        }
      ],
    });
    const story = storyData.get({ plain: true });
    res.render('story', {
      ...story,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/struggle', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Story }],
    });
    const user = userData.get({ plain: true });
    res.render('struggle', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/struggle');
    return;
  }
  res.render('login');
});

router.get('/update/:id', async (req, res) => {
  const updateData = await Story.findByPk(req.params.id)
  const update = updateData.get({ plain: true })
  console.log(update);
  res.render('updateStory', {
    ...update,
    logged_in: req.session.logged_in
  })
})

module.exports = router;
