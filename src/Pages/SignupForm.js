import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../Redux/Actions/actions';
import { useNavigate } from 'react-router-dom';

function SignupForm({ dispatchAddUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const user = {
        username,
        password,
      };
      console.log("User Saved");
      dispatchAddUser(user);
      navigate('/signin'); // Navigate to the login page
    } else {
      console.log('Password and confirm password do not match');
      // Handle the case of password mismatch here
    }
  };

  const handleAlreadyHaveAccount = () => {
    navigate('/signin'); // Navigate to the login page
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      <button type="submit">Sign Up</button>
      <button onClick={handleAlreadyHaveAccount}>Already Have an Account</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignupForm);