import React, { useState, useEffect, useContext } from 'react'
import DashboardPostList from '/client/src/components/DashboardPostList.jsx'
import { useAuth } from '../contexts/AuthContext'
import PostForm from './PostForm.jsx'
export default function Dashboard() {
  return (
    <div className="dashboard-container">    
        <header>
                    <h1>Welcome to Your Dashboard</h1>
                    {/* {profile && <div>{profile.name}</div>} */}
                    <p> Check out your posts or create new ones!</p>
        </header>
        <section className="hero">
            <DashboardPostList />
            <PostForm />
        </section>
    </div>   
  )
}