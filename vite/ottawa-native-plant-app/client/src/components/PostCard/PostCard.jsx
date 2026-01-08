import React from 'react'
import './Card.css'
const posts = [
    {   
            "id": 1,
            "username": "Midnight",
            "post_title": "I need coffee!",
            "post_text": "Where is my cup?",
	        "post_url": "Checkthecupboard.com"	        
        }, 
        {   
            "id": 2,
            "username": "Midnight",
            "post_title": "I need food",
            "post_text": "Where is my plate?",
	        "post_url": "Checkthedishwasher.com"	        
        },
        {   
            "id": 3,
            "username": "Midnight",
            "post_title": "I need a bite!",
            "post_text": "Where is my spoon?",
	        "post_url": "Checkthedrawer.com"	        
        }
    ]

export default function PostCard({ post_title, post_url, post_text }) {
 
  return (
    <div className="post-card">
                
    <ul>
        <h3>Title: { post_title }</h3>
        <a href="{ post_url }"> Post URL: { post_url }</a>
        <p>Post: { post_text } </p>
        
   </ul>
    </div>
  );
}