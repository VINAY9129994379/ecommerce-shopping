import React, { useState } from 'react';
import './LoginSignup.css';

function LoginSignup() {
  const [state, setState] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      
      if (response.ok) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();

      if (response.ok) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className='login'>
      <div className='logincontainer'>
        <h1>{state}</h1>
        <div className='loginfield'>
          {state === "Sign Up" && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your name"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Your email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Your password"
          />
        </div>
        <button onClick={() => { state === "login" ? login() : signup(); }}>Continue</button>
        {state === "Sign Up" ? (
          <p className='loginsignup'>
            Already have an account? <span onClick={() => setState("login")}>Login</span>
          </p>
        ) : (
          <p className='loginsignup'>
            Create an account? <span onClick={() => setState("Sign Up")}>Sign Up</span>
          </p>
        )}
        <div className='loginsignupagree'>
          <input type='checkbox' />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
