// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project

const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create({
        name:req.session.name,
        description:req.body.story_id,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
