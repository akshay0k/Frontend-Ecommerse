import React, { useContext, useState } from 'react';
import './CSS/LoginSignup.css';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === loginDetails.email && user.password === loginDetails.password);
    
    if (user) {
      localStorage.setItem('isLoggedIn', JSON.stringify(true)); // Set login flag
      login();
      alert('Login Successful!');
      navigate('/')
      // Redirect to dashboard or home page
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsingnup-container">
        <h1>Login</h1>
        <form className="loginsignup-feilds" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder='Email Address' 
            name="email" 
            value={loginDetails.email} 
            onChange={handleChange}
          />
          <input 
            type="password" 
            placeholder='Password' 
            name="password" 
            value={loginDetails.password} 
            onChange={handleChange}
          />
          <button type="submit" >Login</button>
        </form>
        <p className="loginsignup-login">
          Don't have an account? <span className='loginsignup-btn' > <p onClick={()=>navigate("/signup")}>Sign Up</p> </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
