import React, { useState } from 'react'
import './App.css'
import Footer from '/client/src/components/Footer.jsx'
import Navbar from '/client/src/components/Navbar.jsx'
import Homepage from './pages/Homepage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx'

import { Routes, Route } from 'react-router-dom'
import { AuthProvider} from './contexts/AuthContext.jsx'
// import ProtectedRoutes from './components/ProtectedRoutes.jsx'

import { useAuth } from './contexts/AuthContext.jsx'

function App(){
  const { user, loading } =useAuth()
      return( 
      <div className="app-container"> 
        <Navbar />
        <div className="routes-container">
          <Routes>
                //PUBLIC ROUTE
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* //PROTECTED ROUTES
               <Route element={<ProtectedRoutes />}>
              // <AuthProvider.Provider value={user}>
              // <Route path="/dashboard" element={<Dashboard />} />
              // </AuthProvider.Provider>
              //add more private routes here
              </Route>
              
          //     <Route path="*" element={<div>Not Found</div>} /> */}
          </Routes>
        </div>
        
        <Footer />      
      </div>
    )
}
export default App


{/* <div className ="routes-container">
            <Routes>
              //PUBLIC ROUTE
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              //PROTECTED ROUTES
              {/* <Route element={<ProtectedRoutes />}> */}
              // <AuthProvider.Provider value={user}>
              // <Route path="/dashboard" element={<Dashboard />} />
              // </AuthProvider.Provider>
              //add more private routes here
              {/* </Route> */}
              
          //     <Route path="*" element={<div>Not Found</div>} />
          //   </Routes>
          // </div>    */}