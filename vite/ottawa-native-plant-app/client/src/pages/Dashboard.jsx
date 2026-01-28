import React, { useState, useEffect } from 'react'
import DashboardPostList from '/client/src/components/DashboardPostList.jsx'
export default function Dashboard() {
    // const [profile, setProfile] = useState(null);
    // useEffect(() => {
    //     fetch('api/auth/me/', {
    //         method: 'GET',
    //         headers: {
    //         'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //     .then(res => console.log("dashboard response headers is ", res.headers))
    //     .then(res => res.json())
        
    //     .then(data => setProfile(data))
    //     // .then(console.log("the dashboard data is", data))
    //     .catch(err => console.error(err));
    // }, []);
    return (
        <div className="dashboard-container">
              <header>
                <h1>Welcome to Your Dashboard</h1>
                {/* {profile && <div>{profile.name}</div>} */}
                <p> Check out your posts or create new ones!</p>
              </header>
              <section className="hero">
                <div>Your Profile:</div>
                 {/* <DashboardPostList /> */}
              </section>
            </div>
    //     <div>
    //         <h2>Create New Post</h2>

    // <form class="new-post-form">
    //     <div>
    //         <label for="new-post-title">Title</label>
    //         <input type="text" id="new-post-title" name="new-post-title" />
    //     </div>
    //     <div>
    //         <label for="new-post-url">Link</label>
    //         <input id="new-post-url" name="new-post-url" />
    //     </div>
    //     <div>
    //         <label for="new-post-body">Post:</label>
    //         <textarea name="new-post-body"></textarea>
    //     </div>
    //         <button type="submit" class="btn">Create</button>
    // </form>

    // <div>  
    //     <H1>   Do you have any posts? </H1>
    // </div>
    //     </div>

    
    )
}
