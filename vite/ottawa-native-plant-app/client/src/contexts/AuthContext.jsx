// import React, { createContext, useState, useEffect, useContext } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     // debugger;
//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true); //track the intial check

//     //Function to fetch the user status from the backend
//     const checkAuthStatus = async () => {
//         try {
//             //the browser automatically attaches the HttpOnly cookie
//             const response = await fetch('/dashboard/', { // The endpoint should be a generic check, not tied to a specific ':id' initially.
//                 method: 'GET',
//                 credentials: 'include', //IMPORTANT for cross-origin requests
//             });
//             if (response.ok) {
//                 const userData = await response.json();
//                 setUser(userData);
//             } else {
//                 setUser(null);
//             }
//         } catch (error) {
//             console.error("Authentication check failed:", error);
//             setUser(null);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         checkAuthStatus();
//     }, []);

//     const login = async (credentials) => {
//         debugger;
//         console.log("The credentials are: " + credentials)
//     try {
//       // Send credentials to the backend /login endpoint
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//         credentials: 'include', // Ensures the browser handles the cookie set by the server
//       });

//       if (response.ok) {
//         // Assuming the response body contains user data if successful
//         const userData = await response.json();
//         setUser(userData);
//         return true; // Indicate success
//       } else {
//         // Handle specific errors (e.g., wrong password)
//         const errorData = await response.json();
//         console.error("Login failed:", errorData.message);
//         return false;
//       }
//     } catch (error) {
//       console.error("Login request failed:", error);
//       return false;
//     }
//   };
//     const logout = async () => {
//     try {
//       // Call the backend /logout endpoint to clear the cookie
//       await fetch('/api/logout', {
//         method: 'POST',
//         credentials: 'include',
//       });
//       setUser(null); // Clear the user state in the frontend
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

// return (
//     <AuthContext.Provider value={{ user, isLoading, login, logout }}>
//     {children}
//     </AuthContext.Provider>
// );
    
// };
// export const useAuth = () => useContext(AuthContext);