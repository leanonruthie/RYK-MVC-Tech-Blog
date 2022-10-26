// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project

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
