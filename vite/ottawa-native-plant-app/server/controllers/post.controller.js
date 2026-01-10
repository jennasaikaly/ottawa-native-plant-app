import { Post } from '../models/index.js'

export const getAllPosts = (req, res) => {
    Post.find({})
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })        
}

    //CREATE POST 
export const createPost = (req, res) => {
    Post.create(req.body)
        .then(dbPostData => res.json(dbPostData))
        .catch(err => res.status(400).json(err));
}

    // //GET ONE POST BY ID
    // getPostById({ params }, res) {
    //     Post.findOne({ _id: params.id}) //why _?
    //         .then(dbPostData => {
    //             if (!dbPostData){
    //                 res.status(404).json({ message: 'No post found with this id!'})
    //                 return;
    //             }
    //             res.json(dbPostData)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.status(400).json(err)
    //         })
    // }

    
//     //UPDATE POST BY ID
    
// updatePost({ params, body }, res) {
//   Post.findOneAndUpdate({ _id: params.id }, body, { new: true })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No Post found with this id!' });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch(err => res.status(400).json(err));
// }

// // delete Post
// deletePost({ params }, res) {
//   Post.findOneAndDelete({ _id: params.id })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No Post found with this id!' });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch(err => res.status(400).json(err));
// }