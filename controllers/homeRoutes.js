// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project and Previous Assignments
// Lesson Learned - BOTH Comment and Update functionalities were quite difficult mainly because I wanted to be clever and tried to use the mini-project data-id method. I went to office hours and tutoring so that my awesome instructor and tutor could point out I wasn't including the Comment model in here 

const router = require('express').Router();
const { Comment, Story, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const storyData = await Story.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment
        }
      ],
    });
    const stories = storyData.map((story) => story.get({ plain: true }));
    // console.log("stories", stories);
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

// router.put('/story/:id', async (req, res) => {
//   try {
//     const storyData = await Story.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//         {
//           model: Comment,
//         }
//       ],
//     });
//     const story = storyData.get({ plain: true });

//     res.render('story', {
//       ...story,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

module.exports = router;
