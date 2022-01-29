import React from 'react';
import logo from '../../assets/logo.png';

const LoginFormComponent = (props) => {
return <div className='login-box'>
            <img src={logo} className='login-box-logo' />
            <input type='text' placeholder='Username' className='login-box-input'/>
            <input type='password' placeholder='Password' className='login-box-input' />
            <span className='login-submit-button'>Log in</span>
            <p className='sign-up-text' onClick={() => props.setCurrentView('register')}>No account? Sign up</p>
        </div>
}

export default LoginFormComponent;