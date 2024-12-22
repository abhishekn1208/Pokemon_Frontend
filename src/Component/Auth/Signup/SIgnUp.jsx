import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'

const SIgnUp = () => {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const roleRef = useRef()
    const navigate = useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const user = {
            username : usernameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value,
            role : roleRef.current.value
        }
      
        try {
            let response = await axios.post("https://pokemon-backend-7-ngbx.onrender.com/user/signup",user)
        if(response.status===201){
            alert("Signup Successfully, You can login now")
            navigate("/sigin")
        }
        } catch (error) {
            alert("Error in login")
        }
    }
  return (
    <div id='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input type="text" placeholder='Username' id='username' ref={usernameRef}/>
        <label htmlFor="email">Email :</label>
        <input type="email" id='email' placeholder='Email' ref={emailRef}/>
        <label htmlFor="password">Password :</label>
        <input type="password" id='password' placeholder='password' ref={passwordRef}/>
        <label htmlFor="role">Role</label>
            <select id="role" ref={roleRef}>
                <option value="">Select your role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
        
        <input type="submit" />
      </form>
    </div>
  )
}

export default SIgnUp
