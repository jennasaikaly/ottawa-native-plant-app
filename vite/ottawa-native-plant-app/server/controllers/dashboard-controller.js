import { Post, User } from '../models/index.js'

//ALL OF THESE NEED AUTH STILL

//GET MY POSTS
export const getMyPosts = async (req, res) => {
    // debugger;
    // console.log("getmyPosts is", req.user.id)
    const userId = req.user.id;
    if(!userId) {
        return res.status(400).json({ message: 'User ID is required'})
    } try{

        const userWithPosts = await User.findById(userId).populate('posts')
        
        if (!userWithPosts){
            return res.status(404).json({ message: 'No user found with this id'})
        }
        console.log('Successfully retrieved user with posts');
        // console.log("userWithPosts is", userWithPosts)
     res.json(userWithPosts); // Responds with the entire user object including the posts field
    } catch (err){
        console.error(err);
        res.status(500).json({ message: 'An internal server error occured.', error: err.message});
    }        
}

// CREATE POST
export const createPost = async (req, res) => {
    // It's safer to destructure directly from req.body if possible
    // console.log("req user is", req.user.id)
    // console.log("req body is", req.body)
    debugger;
    const userId = req.user.id;
    const postBody = req.body
    const postData = {
        ...postBody,
        userId: userId
    }
    // postData.append("userId", userId);
    // const { userId, ...postData } = req.body;
    console.log("the full createPost data is ", postData);
    // console.log("the rest of the data is", postData)
    try {
        // 1. Create and save the new post document in one step using Post.create()
        // The postData already contains all necessary fields including any user reference if structured that way
        const newPost = await Post.create(postData);
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

// UPDATE POST
export const updatePost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(console.log('i am updating'))
        .then(console.log(req.body))
        .then(dbPostData => res.json(dbPostData))
        .catch(err => res.status(400).json(err))
}

// DELETE POST
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