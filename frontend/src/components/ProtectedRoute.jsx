import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Simple auth check
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
