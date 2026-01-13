import React, { useState, useEffect } from 'react'
import PostCard from './PostCard/PostCard'

    export default function PostList(){

       
            const [ posts, setPosts ] = useState([]);

            useEffect(() => {
                fetch('http://localhost:3000/api/posts')
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error(`Error:`, error));
            }, []);
           
        return (
            <div className="post-list-container">
                <ul>
                    {posts.map((post) => (
                        
                        <PostCard 
                            key={post.id} 
                            post_title={post.post_title}
                            post_url={post.post_url}
                            post_text={post.post_text}
                        />                       
    ))}
    </ul>
            </div>
        )
    }