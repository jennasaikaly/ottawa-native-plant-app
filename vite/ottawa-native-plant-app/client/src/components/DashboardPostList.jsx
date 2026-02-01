import React, { useState, useEffect, useContext } from 'react'
import PostCard from './PostCard/PostCard'
import { useAuth } from '../contexts/AuthContext.jsx'

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
export default function DashboardPostList(){

    const { user } = useAuth();
    const [ posts, setPosts ] = useState([]);
    const [ error, setError ] = useState(null);
    const [loading, setLoading] = useState(true);

  // If user is null (e.g., not logged in), redirect to login or show a message
//   if (!user) {
//     return <p>Please log in to see your dashboard</p>;
//   }         

            useEffect(() => {

                 // If no user is logged in, do not fetch
        if (!user || !user.accessToken) {
            setLoading(false);
            return;
        }
    // Define the async fetching function inside useEffect
    const fetchUserPosts = async () => {
        setLoading(true);
      try {        
        const response = await fetch(`http://localhost:3000/api/dashboard/posts`,
            {   method: 'GET',
                headers: {
                     // Use user.token or user.id depending on your backend authentication
                    'Authorization': `Bearer ${user.accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
           
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("fetch data is", data.posts)
        setPosts(data.posts);
        setError(null);
        // console.log("posts are", posts)
      } catch (err) {
        console.error(`Error fetching posts:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    //Call the function
    fetchUserPosts();

    // // Only call fetch if a valid userId is present
    // if (userId) {
    //   fetchUserPosts();
    // }
  }, [user]); // Dependencies: re-run if the user object changes
  // Conditional rendering based on state
    if (!user) {
        return <p>Please log in to see your dashboard</p>;
    }
    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error}</p>;
              // useEffect(() => {
              //     fetch('http://localhost:3000/api/dashboard/posts/')
                  
              //     .then(response => response.json())
              //     .then(console.log("fetchresponse is", response))
              //     .then(data => setPosts(data))
              //     .then(console.log("fetchdata is", data))
              //     .catch(error => console.error(`Error:`, error));
              // }, []);
  return (
     <div className="post-list-container">
        {posts.length === 0 ? (
                <p>No posts found.</p>
        ) : (
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
        )}
    </div>
)};

  //   export default function PostList(){

  //           console.log("postlist user id is", userId)
  //           const [ posts, setPosts ] = useState([]);
  //           const [ error, setError ] = useState(null);

  //           useEffect(() => {
  //   // Define the async fetching function inside useEffect
  //   const fetchUserPosts = async () => {
  //     try {
  //       // Append the specific userId to the API URL
  //       const response = await fetch(`http://localhost:3000/api/posts?userId=${userId}`); 

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (err) {
  //       console.error(`Error:`, err);
  //       setError(err.message);
  //     }
  //   };

  //   // Only call fetch if a valid userId is present
  //   if (userId) {
  //     fetchUserPosts();
  //   }
  // }, [userId]); // Add userId to the dependency array
           
  //       return (
  //           <div className="post-list-container">
  //               <ul>
  //                   {posts.map((post) => (
                        
  //                       <PostCard 
  //                           key={post.id} 
  //                           post_title={post.post_title}
  //                           post_url={post.post_url}
  //                           post_text={post.post_text}
  //                       />                       
  //   ))}
  //   </ul>
  //           </div>
  //       )
  //   }