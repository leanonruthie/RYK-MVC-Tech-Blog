// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project and Previous Assignments
// Lesson Learned - Comment functionality was quite difficult mainly because I wanted to be clever and tried to use the mini-project data-id method. I went to office hours so that my awesome instructor could point out that comment.id is not valid based off of the model and I had to make sure targeting the form, story.id was continually used as the data-id - for further comments, see homepage.js in public

const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  // console.log("trying comment post", req.body);
    try {
      const newComment = await Comment.create({
        name:req.body.name,
        description:req.body.description,
        story_id:req.body.story_id,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  module.exports = router;
