import React from 'react'

const Login = () => {
  return (
    <>
      <h3>Login Form</h3>
      <div className="container">
        <form method="POST">
          <input type="text" placeholder="Username" name="uname" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login