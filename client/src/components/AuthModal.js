import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

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
      <Card className='form-card'>
      <form className='form' onSubmit={handleFormSubmit}>
        <input
          type="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br/>
        {formType === 'login' ? (
          <button type="submit">Login</button>
        ) : (
          <button type="submit">Signup</button>
        )}
        <br/>
        <button onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}>
          Don't have an Account?  {formType === 'login' ? 'Signup' : 'Login'} Here
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      </Card>
      <p>hi</p>
    </div>
  );
};

export default AuthModal;
