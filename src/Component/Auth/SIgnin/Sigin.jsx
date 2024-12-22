import axios from 'axios'
import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import './sigin.css'

const Sigin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const user = {
            email : emailRef.current.value,
            password : passwordRef.current.value
        }
        console.log(user)

       try {
        const response = await axios.post("https://pokemon-backend-7-ngbx.onrender.com/user/sigin",user);
        console.log(response)
        if(response.status===201 && response.data.token){
            localStorage.setItem("token",response.data.token)
            navigate("/pokemon")
        }else {
          alert("Failed to sign in. Please check your credentials.");
        }
       } catch (error) {
        console.error("Error signing in:", error);
      alert("An error occurred while signing in.");
       }
    }
  return (
    <div id='sigin'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input type="email" placeholder='email...' id='email' ref={emailRef}/>
        <label htmlFor="password">Password :</label>
        <input type="password" placeholder='password' id='password' ref={passwordRef}/>
        <input type="submit" value="Sign In"/>
      </form>
    </div>
  )
}

export default Sigin
