import React from 'react';
import './Login.css';
import LoginFormComponent from '../../components/LoginForm/LoginForm';
import RegisterFormComponent from '../../components/RegisterForm/RegisterForm';

const LoginScreen = () => {
    const [currentView, setCurrentView] = React.useState('login');

    if (currentView === 'register'){
        return <div className='login-container'>
        <RegisterFormComponent setCurrentView={setCurrentView} />
        <p style={{color: '#999', fontWeight: 700, fontSize: 14}}>Made with 💖 by <a href='https://github.com/redoral' target='_blank'>Red</a></p>
    </div>
    } else {
           return <div className='login-container'>
           <LoginFormComponent setCurrentView={setCurrentView} />
           <p style={{color: '#999', fontWeight: 700, fontSize: 14}}>Made with 💖 by <a href='https://github.com/redoral' target='_blank'>Red</a></p>
       </div>
    }
}

export default LoginScreen;