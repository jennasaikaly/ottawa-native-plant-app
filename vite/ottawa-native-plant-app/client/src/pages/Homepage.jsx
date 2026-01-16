import React from "react";
import PostList from '/client/src/components/PostList.jsx'

export default function Homepage(){
    return (
        <div className="homepage-container">
      <header>
        <h1>Welcome to My Website</h1>
        <p>Your one-stop destination for amazing content.</p>
      </header>
      <section className="hero">
         <PostList />
      </section>
    </div>
    )
}