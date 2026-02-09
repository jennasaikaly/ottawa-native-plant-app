import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context object that components will subscribe to
const AuthContext = createContext();

// 2. Create the Provider Component, a component that wraps its children with the context provider,
// managing the isLoggedIn state and user data.  Ir provides login and logout functions 
// to update this state
export const AuthProvider = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: logged out
  const [user, setUser] = useState(null); // To store user info
  
  const login = (userData) => {

    // console.log("login data is",userData)
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);    
  };
  const authData = {
    isLoggedIn,
    user,
    login,
    logout
  };

  return (
    // Pass the state and functions to children
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook that allows any functional component to easily acess the authentication state and methods\
//without manually using the AuthContext.Consumer or useContext(AuthContext) every time.
export const useAuth = () => useContext(AuthContext);
