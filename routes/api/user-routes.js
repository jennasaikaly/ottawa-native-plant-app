const router = require('express').Router();
const { User } = require('../../models');

//GET /api/users
router.get('/', (req, res) => {
    //Access our User model and run .findAll() method (one of Sequelize's Model class methods);
    //requests all users from the user table in the database and responds/sends back as JSON
    User.findAll({
            attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
  // expects {username: 'Saikaly', email: 'jenna@gmail.com', password: 'password1234'}
    User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;