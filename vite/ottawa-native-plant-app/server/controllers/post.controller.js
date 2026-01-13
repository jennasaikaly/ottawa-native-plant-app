import { Post } from '../models/index.js'

// GET ALL POSTS
export const getAllPosts = (req, res) => {
    Post.find({})
        .then (console.log('i made it'))
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })        
}

// CREATE POST 
export const createPost = (req, res) => {
    Post.create(req.body)
        .then(dbPostData => res.json(dbPostData))
        .catch(err => res.status(400).json(err));
}

//GET POST BY ID
export const getPostById = (req, res) => {
    console.log({})
    Post.findById(req.params.id)
        .then(console.log('i am here'))
        .then(dbPostData => {
            if(!dbPostData){
                res.status(404).json("This post cannot be found")
            } else {
                res.json(dbPostData)
            }
        })
        .catch(err => res.status(400).json(err))
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
// //     //GET ONE POST BY ID using await/async
// export const getOnePostById = async (req, res, next) => {
//     try{ 
//         //await Mongoose query
//      const post = await Post.findById(req.params.id);
    
//     if (!post){
//         return res.status(404).json({message: "Post not found"})
//     }
//     res.status(200).json(post);
// }   catch (error) {
//     //Pass the error to the global error handler
//     next(error);
//     }
// }