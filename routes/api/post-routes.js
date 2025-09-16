const router = require('express').Router();
const { Post, User } = require('../../models');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id', 
            'post_text',
            'post_url', 
            'title', 
            'created_at'],
        order: [['created_at', 'DESC']],
        include: [ //JOIN to the User table, is an array of objects
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

//GET a single post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
        id: req.params.id
        },
        attributes: [
            'id', 
            'post_text', 
            'post_url', 
            'title', 
            'created_at'],
        include: [
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

//Create post route
router.post('/', (req, res) => {
  // expects {title: 'Ottawa Native Plant App goes public!', post_text: 'This is the first post!', post_url: 'https://nativeplantapp/post', user_id: 1}
  Post.create({
    title: req.body.title,
    post_text: req.body.post_text,
    post_url: req.body.post_url,
    user_id: req.body.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT route for Posts
router.put('/:id', (req, res) => {
    Post.update(
        {
        title: req.body.title
        },
        {
        where: {
            id: req.params.id
        }
        }
    )
        .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

// DELETE route for Posts
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
                id: req.params.id
        }
    })
        .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });

module.exports = router;