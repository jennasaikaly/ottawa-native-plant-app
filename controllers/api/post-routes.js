const sequelize = require('../../config/connection');
const router = require('express').Router();
const { Post, User, Vote, Comment } = require('../../models');


// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id', 
            'post_text',
            'post_url', 
            'title', 
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        order: [['created_at', 'DESC']],
        include: [ 
            {
                model:Comment,
                attributes: [
                        'id',
                        'comment_text',
                        'post_id',
                        'user_id',
                        'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            //JOIN to the User table, is an array of objects
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
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
                model:Comment,
                attributes: [
                        'id',
                        'comment_text',
                        'post_id',
                        'user_id',
                        'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
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


// PUT /api/posts/upvote
router.put('/upvote', (req, res) => {
  // make sure the session exists first
  if (req.session) {
    // pass session id along with all destructured properties on req.body
    Vote.create({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//UPVOTING ROUTE FOR POSTS
//THIS WORKS PRIOR TO adding session and refactoring
// PUT /api/posts/upvote
// router.put('/upvote', (req, res) => {
//     console.log(req.body.user_id)
//     Vote.create({
        
//         user_id: req.body.user_id,
//         post_id: req.body.post_id
// })
//     .then(() => {
//         // then find the post we just voted on
//         return Post.findOne({
//             where: {
//                 id: req.body.post_id
//             },
//             attributes: [
//                 'id',
//                 'post_text',
//                 'post_url',
//                 'title',
//                 'created_at',
//                 // use raw MySQL aggregate function query to get a count of how many votes the post has and return it under the name `vote_count`
//                 [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
//         'vote_count']
//             ]
//         })    
//     })
//     .then(dbPostData => res.json(dbPostData))
//     .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//     });
// });

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