import React from 'react'
import './Login.css'
import assets from '../../assets/assets.js'
import { useState } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';


function Login() {
   
  const [currState, setcurrState] = useState("Sign Up");
  const [data, setData] = useState({
      name:"",
      email:"",
      password:""
    })
    const onchangeHandler = (e) => {
      const {name,value} = e.target;
      setData((data) => ({...data,[name]:value}))
    }

    const { url, setToken } = useContext(StoreContext)
    const navigate = useNavigate()

    const onLogin = async(e) => {
      e.preventDefault();
      let newurl = url;
      if(currState == "Login"){
        newurl += '/api/user/login';
      }else{
        newurl += '/api/user/register';
      }

      const response = await axios.post(newurl,data);

      if(response.data.success){
         setToken(response.data.token)
         localStorage.setItem("token",response.data.token)
         navigate('/chat')
      }else{
        alert(response.data.message)
      }
    }


  return (
    <div className='login'>
      <img src={assets.logo_big} className='logo' />
      <form onSubmit={onLogin} className="login-form">
        <h2>{currState}</h2>
        {currState == "Sign Up" ? <input type="text" placeholder='Username' name='name' onChange={onchangeHandler} value={data.name} className="form-input" required /> : <></>}
        <input type="email" placeholder='Email' name='email' onChange={onchangeHandler} value={data.email} className="form-input" required />
        <input type="password" placeholder='Password' name='password' onChange={onchangeHandler} value={data.password} className="form-input" required />
        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login Now"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use and policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign Up" ?
            <p className="login-toggle">Already have an account?<span onClick={() => setcurrState('Login')}>Click here</span></p> :
            <p className="login-toggle">To Create an Account <span onClick={() => setcurrState('Sign Up')}>Click here</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login