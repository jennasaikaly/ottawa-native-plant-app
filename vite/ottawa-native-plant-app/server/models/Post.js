import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    post_title: {
        type: String
    },
    post_url: {
        type: String
    }, 
    post_text: {
        type: String
    },
    createdBy: {
        type: String
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Post = model('Post', PostSchema);
export { Post }