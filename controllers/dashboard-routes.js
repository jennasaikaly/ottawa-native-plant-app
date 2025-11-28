const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


// router.get('/', (req, res) => {
//   Post.findAll({
//     where: {
//       // use the ID from the session
//       user_id: req.session.user_id
//     },
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       // serialize data before passing to template
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       res.render('dashboard', { posts, loggedIn: true });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        where: {
        user_id: req.session.user_id
        },
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
        .then(dbPostData => {
      // serialize data before passing to template
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
    })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

// router.get('/dashboard', (req, res) => {
//     Post.findAll({
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       //loops over and maps each Sequelize object into a serialized version of itself
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       // pass a single post object into the homepage template
//       res.render('dashboard', { 
//         posts,
//         loggedIn: req.session.loggedIn
//       });
//       })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //MAKE A POST
// router.post('/', (req, res) => {
//     //check the session
//     if (req.session) {   
//         Post.create({
//             comment_text: req.body.comment_text,
//             post_id: req.body.post_id,
//             // use the id from the session
//             user_id: req.session.user_id
//         })
//             .then(dbCommentData => res.json(dbCommentData))
//             .catch(err => {
//                 console.log(err);
//                 res.status(400).json(err);
//             })
//     }
// })

// //DELETE A POST
// router.delete('/:id', (req, res) => {
//     Post.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbPostData => {
//         if (!dbPostData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//         }
//         res.json(dbPostData);
//         })
//         .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//         });

// })

module.exports = router;