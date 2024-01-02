import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate()
 
    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push(userDetails);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert('Signup Successful!');
        navigate('/login')
        setUserDetails({ username: '', email: '', password: '' });
    };

    return (
        <div className='loginsignup'>
            <div className="loginsingnup-container">
                <h1>Sign Up</h1>
                <form className="loginsignup-feilds" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        name="username" 
                        value={userDetails.username} 
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        placeholder='Email Address' 
                        name="email" 
                        value={userDetails.email} 
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        name="password" 
                        value={userDetails.password} 
                        onChange={handleChange}
                    />
                    <button type="submit">Continue</button>
                </form>
                <p className="loginsignup-login">
                    Already have an account? <span> <p  onClick={()=>navigate("/login")}>Login</p> </span>
                </p>
               
            </div>
        </div>
    );
}

export default SignUp;
