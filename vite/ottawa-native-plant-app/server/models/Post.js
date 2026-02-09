import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    post_title: {
        type: String,
        required: true
    },
    post_url: {
        type: String,
        required: true
    }, 
    post_text: {
        type: String,
        required: true
    },
    // author: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {//Link to the User Model
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true

    }
}, {
    toJSON: { virtuals:true }, //includes 'in' in JSON responses
})

const Post = model('Post', PostSchema);
export { Post }