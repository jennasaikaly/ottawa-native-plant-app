import React, { useState } from 'react'
import './App.css'
import Footer from '/client/src/components/Footer.jsx'
import Navbar from '/client/src/components/Navbar.jsx'
import Homepage from './pages/Homepage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx'
// import Login, { action as loginAction } from './pages/Login.jsx'
import { Routes, Route } from 'react-router-dom'
// import { AuthProvider } from './contexts/AuthContext.jsx'
// import ProtectedRoutes from './components/ProtectedRoutes.jsx'



function App(){
    
  return(
 
      <div className="app-container"> 

        <Navbar />
        
          <div className ="routes-container">
            <Routes>
              //PUBLIC ROUTE
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              //PROTECTED ROUTES
              {/* <Route element={<ProtectedRoutes />}> */}
              <Route path="/dashboard" element={<Dashboard />} />
              //add more private routes here
              {/* </Route> */}
              
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </div>   
      
          <Footer />      
      </div>
    )
}
export default App
