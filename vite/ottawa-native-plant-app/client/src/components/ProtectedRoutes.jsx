import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx'; 

const ProtectedRoutes = () => {
  const { user } = useAuth(); // Get user from context
//   const { isLoggedIn, user, login, logout } = useAuth();  

return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;