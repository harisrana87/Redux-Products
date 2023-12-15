import React from 'react';
import { useNavigate } from 'react-router-dom';

function SuccessPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signup');
  };
  const handleproduct = () => {
    navigate('/product');
  };

  return (
    <div>
      <h2>Login Successful!</h2>
      <p>Welcome, user! You have successfully logged in.</p>
      <button onClick={handleLogout}>Log Out</button>
      <button onClick={handleproduct}>Product List</button>
    </div>
  );
}

export default SuccessPage;