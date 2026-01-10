import React, { useState, useEffect } from 'react'
import PostCard from './PostCard/PostCard'

// const posts = [
//     {   
//             "id": 1,
//             "username": "Midnight",
//             "post_title": "I need coffee!",
//             "post_text": "Where is my cup?",
// 	        "post_url": "Checkthecupboard.com"	        
//         }, 
//         {   
//             "id": 2,
//             "username": "Midnight",
//             "post_title": "I need food",
//             "post_text": "Where is my plate?",
// 	        "post_url": "Checkthedishwasher.com"	        
//         },
//         {   
//             "id": 3,
//             "username": "Midnight",
//             "post_title": "I need a bite!",
//             "post_text": "Where is my spoon?",
// 	        "post_url": "Checkthedrawer.com"	        
//         }
//     ]

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