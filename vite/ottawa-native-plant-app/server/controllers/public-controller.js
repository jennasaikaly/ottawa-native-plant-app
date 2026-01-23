import { Post } from '../models/index.js'
import { User } from '../models/index.js'

// GET ALL POSTS
export const getAllPosts = (req, res) => {
    Post.find({})
        .then (console.log('i made it Post Controller'))
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })        
}

//GET SINGLE POST BY ID
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






//get posts by USERID
// export const getAllPostsbyUser = (req, res) => {
//     Post.find({ userId: userId })
//         .populate('userId', '_id')
//         .then (console.log('i made it user/Post Controller'))
//         .then(dbPostData => res.json(dbPostData))
//         .catch(err => {
//             console.log(err);
//             res.status(400).json(err);
//         })        
// }
// export const getAllPostsByUser = (req, res) => {
//         Post.find({ userId: userId} ) 
//             .populate( 'userId', '_id' )
//             .then (console.log("I made it user/post controller"))
//             .then(dbPostData => res.json(dbPostData))
//             .catch(err => {
//             console.log(err);
//             res.status(400).json(err);
//         }) 
// }

// export const createPost = async (req, res) => {
//     const userId = req.body.userId
//     const postData = req.body
    
//     try {
//         //create and save the new post document
//         const newPost = await Post.create(postData);
//         console.log('Created post:', newPost)
//         console.log("PostID is: ", newPost._id)
//          //find the user and add the new post's ID to their posts array
//         const user = await User.findById(userId);
       
        

//          // saves the post
//         const post = await newPost.save()
//         user.posts.push({ postId:  post._id });
//         //save the updated user document
//         await user.save();
//         console.log('User updated with new post:', user.username);
        
        
//         return res.json(post.toJSON())
        
//     } catch (e) {
//         return res.status(400).json(`Error: ${e}`)
//     }
//     }

export const createPost = async (req, res) => {
    // It's safer to destructure directly from req.body if possible
    
    const { userId, ...postData } = req.body;
    // console.log("the userId is ", userId);
    // console.log("the rest of the data is", postData)
    try {
        // 1. Create and save the new post document in one step using Post.create()
        // The postData already contains all necessary fields including any user reference if structured that way
        const newPost = await Post.create(req.body);
        // const newPostData =JSON.stringify(newPost);
    //    console.log("new post data is", newPostData)
        console.log('Created post:', newPost);
        // console.log("Post ID is: ", newPost._id);

        // 2. Find the user to update their posts array
        const user = await User.findById(userId);

        if (!user) {
            // Handle case where the user ID provided does not exist
            return res.status(404).json({ error: "User not found" });
        }
       
        // 3. Add the new post's ID to the user's posts array
        // Assuming 'posts' is an array of objects like { postId: Schema.Types.ObjectId }
        user.posts.push(newPost._id);

        // 4. Save the updated user document
        await user.save();
        console.log('User updated with new post:', user.username);
        
        // 5. Return the newly created post data
        // Using .json() automatically handles serialization to JSON format
        return res.status(201).json(newPost); // Use 201 Created status code

    } catch (e) {
        // Log the error for debugging purposes
        console.error('Error in createPost:', e);
        // Return a generic 500 status for server errors, or 400 for validation errors
        return res.status(400).json({ error: `Error creating post: ${e.message}` });
    }
};

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