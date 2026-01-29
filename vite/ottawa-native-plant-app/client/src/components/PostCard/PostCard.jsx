import React from 'react'
import './Card.css'

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