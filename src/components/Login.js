import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetToken } from './GetToken';
import './Login.css' 

const Login = () => {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if(user === 'admin' && pass === 'admin'){

      GetToken().then((token) => {
        localStorage.setItem('token', token);
        navigate('/dashboard');
      });

    }else{
      alert('usuario o contraseña invalidos');
    }

  };
  
  return (
    <div className='form'>

        <h2>Login</h2>
          
        <div className='input'>
            <div className="inputBox">
                    <label>Username</label>
                    <input type="text" id="user" placeholder="user"
                    onChange={e => setUser(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <label>Password</label>
                    <input type="password" id="password" placeholder="password"
                    onChange={e => setPass(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <button type="button" onClick={handleLogin}> Login </button>
                </div>
        </div>

    </div>
  )
};

export default Login;
