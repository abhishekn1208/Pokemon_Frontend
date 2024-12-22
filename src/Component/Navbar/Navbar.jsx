import axios from 'axios'
import './navbar.css'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate()
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            setIsAuthenticated(true)
        }else{
            setIsAuthenticated(false)
        }
    })

    const handleSignout=async()=>{
        try {
            const token = localStorage.getItem("token")
      
        const response = await axios.post("https://pokemon-backend-7-ngbx.onrender.com/user/signout",{},{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        console.log(response)
        if(response.status===201){
            localStorage.removeItem("token")
            alert("Logged out successfully")
            navigate("/sigin")
        }
        } catch (error) {
            console.log(error)
        }
       
    }
  return (
   <div id='navbar'>
    <nav >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            <li>
                <Link to="/signup">Signup</Link>
                
                 {isAuthenticated ? (<Link onClick={handleSignout}>Signout</Link>) : (<Link to="/sigin">Signin</Link>)}
            </li>
        </ul>
    </nav>
   </div>
  )
}

export default Navbar
