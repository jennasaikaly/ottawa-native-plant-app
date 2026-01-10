import { User } from '../models/index.js'

export const getAllUsers = (req, res) => {
    User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })        
}

    //CREATE POST 
export const createUser = (req, res) => {
    User.create(req.body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
}