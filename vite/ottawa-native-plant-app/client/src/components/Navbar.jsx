import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

export default function Navbar(){
    //use the custom hook to access context values
    const { isLoggedIn, user, logout } = useAuth()
    // console.log("useAuth user is", user)
    
    return (
    
        <nav className="nav">
            <CustomLink to="/" className="site-title"> 
                Ottawa Native Plant App
            </CustomLink>
            {isLoggedIn && 
            <CustomLink to="/dashboard" >
                Dashboard
            </CustomLink>}
            
            <ul>    
                { isLoggedIn ? (
            <>
                <span>Welcome, {user ? user.name : 'User'}!</span>
                <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>
            </>
                ) : (
            <>                    
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/signup">Signup</CustomLink>
            </>
                )}                
            </ul>            
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}