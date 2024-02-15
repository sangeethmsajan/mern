import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Assuming you are using React Bootstrap

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage or wherever it's stored
    localStorage.removeItem('token');

    // Redirect the user to the login page or home page
    navigate('/login');
  };

  return (
    <Button onClick={handleLogout} variant="outline-danger">Logout</Button>
  );
}

export default Logout;
