// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project and Previous Assignments
// Lesson Learned - Update functionality was quite difficult mainly because I wanted to be clever and tried to use the mini-project data-id method. I went to tutoring so that my awesome tutor could point out that I continually made simply mistakes fetching and replacing incorrect routes - for further comments, see story.js in public and below router.put

const router = require('express').Router();
const { Story } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newStory = await Story.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newStory);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const storyData = await Story.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!storyData) {
      res.status(404).json({ message: 'No story found with this id!' });
      return;
    }

    res.status(200).json(storyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
