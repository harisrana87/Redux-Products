import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../Redux/Actions/actions';
import { useNavigate } from 'react-router-dom';

function SigninForm({ loginSuccess, loginFailure, signupData, storedUsername, storedPassword }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate('/signup');
  };
  const handleSignin = (e) => {
    e.preventDefault();

    // Simulating API call
    const userIndex = storedUsername.indexOf(username);
    if (userIndex !== -1 && storedPassword[userIndex] === password) {
      const user = { username };
      loginSuccess(user);
      navigate('/success'); // Navigate to success page
    } else {
      console.log('Invalid username or password');
      loginFailure('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSignin}>
      <h2>Sign In</h2>
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
      <p>Signup Data: {signupData}</p> {/* Display signup data */}
      <button type="submit">Sign In</button>
      <button onClick={handleSignup}>Signup</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  signupData: state.signup.signupData,
  storedUsername: state.user.users.map((user) => user.username),
  storedPassword: state.user.users.map((user) => user.password),
});

export default connect(mapStateToProps, { loginSuccess, loginFailure })(SigninForm);