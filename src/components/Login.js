import React from 'react'
import './Login.css' 

const Login = () => {
  return (
    <div className='form'>

        <h2>Login</h2>
          
        <div className='input'>
            <div class="inputBox">
                    <label>Username</label>
                    <input type="text" name="" placeholder="user"
                    onfocus="this.placeholder=''" 
                    onblur="this.placeholder='user'"/>
                </div>
                <div class="inputBox">
                    <label>Password</label>
                    <input type="password" name="" placeholder="password"
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='password'"/>
                </div>
                <div class="inputBox">
                    <button type="button"> Login </button>
                </div>
        </div>

    </div>
  )
};

export default Login;
