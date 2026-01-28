import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context object
const AuthContext = createContext();

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: logged out
  const [user, setUser] = useState(null); // To store user info
  
  const login = (userData) => {

    console.log("login data is",userData)
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);    
  };

  return (
    // Pass the state and functions to children
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy consumption
export const useAuth = () => useContext(AuthContext);
