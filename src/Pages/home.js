import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };
  const handleSignin = () => {
    navigate('/signin');
  };
  const handleproduct = () => {
    navigate('/product');
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome, user!</p>
      <button onClick={handleSignin}>Sign in</button>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleproduct}>Product</button>
    </div>
  );
}

export default Home;