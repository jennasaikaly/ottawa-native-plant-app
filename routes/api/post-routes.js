const router = require('express').Router();
const { Post, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id', 
            'post_text',
            'post_url', 
            'title', 
            'created_at'],
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

module.exports = router;