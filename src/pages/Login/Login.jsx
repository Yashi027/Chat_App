import React from 'react'
import './Login.css'
import assets from '../../assets/assets.js'
import { useState } from 'react'

function Login() {

  const [currState, setcurrState] = useState("Sign Up");

  return (
    <div className='login'>
      <img src={assets.logo_big} className='logo' />
      <form className="login-form">
        <h2>{currState}</h2>
        {currState == "Sign Up" ? <input type="text" placeholder='Username' className="form-input" required /> : <></>}
        <input type="email" placeholder='Email' className="form-input" required />
        <input type="password" placeholder='Password' className="form-input" required />
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