import React, { useState, useEffect } from 'react'
import PostCard from './PostCard/PostCard'

    export default function PostList(){

            console.log("postlist user id is", userId)
            const [ posts, setPosts ] = useState([]);
            const [ error, setError ] = useState(null);

            useEffect(() => {
    // Define the async fetching function inside useEffect
    const fetchUserPosts = async () => {
      try {
        // Append the specific userId to the API URL
        const response = await fetch(`http://localhost:3000/api/posts?userId=${userId}`); 

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(`Error:`, err);
        setError(err.message);
      }
    };

    // Only call fetch if a valid userId is present
    if (userId) {
      fetchUserPosts();
    }
  }, [userId]); // Add userId to the dependency array
           
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