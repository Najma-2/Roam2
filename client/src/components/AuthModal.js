import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import logo from './Logo.png'
import MapImg from './MapImg.png';
import Spiral from './spiral.png';


const AuthModal = () => {
  const [formType, setFormType] = useState('login');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  console.log("hello")

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const endpoint = formType === 'login' ? '/login' : '/signup';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      if (data.error) {
        setErrorMessage(data.error);
      } else {
        // Handle successful login/signup
      }
    } catch (err) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  

  return (
    <div>
    <div> <img className='logo' src={logo} alt="Logo" /></div>
    <div> <img className='MapImg' src={MapImg} alt="MapImg" /></div> 
    <div> <img className='spiral' src={Spiral} alt="spiral" /></div>
    <div className='bottomleft'>
    <span className='EMAIL'>EMAIL US</span>
    <br></br>
    <a href="" className='email'>roam@traveldestinations.co</a>
    <br></br>
    <br></br>
    <span className='web'>WEB</span>
    <br></br>
    <a href="" className='website'>roam.com</a>
    </div>
      <Card className='form-card'>
      <div class="sit">
      <h1><span>Log in to take your trip planning to the next level</span></h1>   
      </div>
      <form className='form' onSubmit={handleFormSubmit}>
        <input className='button-60'
          type="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <br/>
        <input className='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br/>
        {formType === 'login' ? (
          <button className="login" href="/destinations" type="submit">Login</button>
        ) : (
          <button href="/destinations" type="submit">Signup</button>
        )}
        <br/>
        <button className="signup" onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}>
          Don't have an Account?  {formType === 'login' ? 'Signup' : 'Login'} Here
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      </Card>
      
      
    </div>
  );
};

export default AuthModal;
