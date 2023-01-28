import React, { useState } from 'react'

function SignUp() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(true)

  async function handleSubmit(event) {
    event.preventDefault()
     if (!name || !password) {
      setError("Username and password are required fields.")
      return
    }
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password }),
      })
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const { token } = await response.json()
      localStorage.setItem('token', token)
    } catch (err) {
      setError(err.message)
    }
  }
  function handleClick() {
    setShowForm(!showForm)
  }

  return (
    <div className="main">
      <p class="sign" align="center"> Sign Up</p>
    <button onClick={handleClick}>
        {showForm ? 'Hide Signup Form' : 'Signup'}
    </button>
        {showForm && (
    <form className='signup-form' onSubmit={handleSubmit}>

        <input
        className="un"
        placeholder="Desired Username"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

      <br />

        <input
        placeholder="Desired Password"
        className="pass"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

      <br />
      <button className="submit"type="submit">Sign Up</button>
      {error && <p className='error message'>{error}</p>}
    </form>
        )}
 </div>
  )
}

export default SignUp