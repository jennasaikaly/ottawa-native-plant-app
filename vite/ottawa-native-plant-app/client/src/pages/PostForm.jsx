import react, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'

export default function PostForm(){
    return (
        <div>  <h1>Create a new Post!</h1> 

            <form className="new-post-form">
                <div>
                    <label for="new-post-title">Title</label>
                    <input type="text" id="new-post-title" name="new-post-title" />
                </div>
                <div>
                    <label for="new-post-url">Link</label>
                    <input id="new-post-url" name="new-post-url" />
                </div>
                <div>
                    <label for="new-post-body">Post:</label>
                    <textarea name="new-post-body"></textarea>
                </div>
                <button type="submit" class="btn">Create</button>
            </form>
        </div>
    )
}