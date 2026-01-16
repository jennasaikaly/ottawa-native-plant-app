import { Post } from '../models/index.js'


//ALL OF THESE NEED AUTH STILL

// GET ALL POSTS  
export const getAllPosts = (req, res) => {
    Post.find({})
        .then (console.log('i made it Dashboard controller'))
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })        
}

// GET POST BY ID AND UPDATE
export const updatePost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(console.log('i am updating'))
        .then(console.log(req.body))
        .then(dbPostData => res.json(dbPostData))
        .catch(err => res.status(400).json(err))
}

// GET POST BY ID AND DELETE
export const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(console.log('i am deleting'))       
        .then(dbPostData => {
            if (!dbPostData){
                res.status(404).json('This post cannot be found')
                return
            }else{
                res.json(dbPostData)
            }
        })
        .catch(err => res.status(400).json(err))

}