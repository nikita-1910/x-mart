import React from 'react';
import "./Login.css"

const Login = () => {
  return (
    <div className='outer-box'>
      <div class="form-container">
        <p class="title">Login</p>
        <form class="form">
          <input type="text" class="input" placeholder="User Name" />
          <input type="password" class="input" placeholder="Password" />
          <button class="form-btn">Login</button>
        </form>
        <p class="sign-up-label">
          <a class="sign-up-link" href='/'>Forget Password?</a>
        </p>
    
      </div>
    </div>
  )
}

export default Login