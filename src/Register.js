import React, { useState } from 'react'

const Register = () => {
  const [user, setUser] = useState({
    uname: "",
    password: ""
  })

  let name,value
  const handleChange = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({...user, [name]: value})
  }

  const postData = async (e) => {
    e.preventDefault()

    const {uname, password} = user

    const res = await fetch("/register", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uname,
        password
      })
    })
  }

  return (
    <>
      <h3>Registration Form</h3>
      <div className="container">
        <form method="POST">
            <input type="text" placeholder="Username" name="uname" 
            value={user.uname} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" 
            value={user.password} onChange={handleChange}/>
            <button type="submit" onClick={postData}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Register