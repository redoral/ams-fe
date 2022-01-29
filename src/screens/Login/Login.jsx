import React from 'react';
import './Login.css';
import LoginFormComponent from '../../components/LoginForm/LoginForm';
import RegisterFormComponent from '../../components/RegisterForm/RegisterForm';

const LoginScreen = () => {
    const [currentView, setCurrentView] = React.useState('login');

    if (currentView === 'register'){
        return <div className='login-container'>
        <RegisterFormComponent setCurrentView={setCurrentView} />
    </div>
    } else {
           return <div className='login-container'>
           <LoginFormComponent setCurrentView={setCurrentView} />
       </div>
    }
}

export default LoginScreen;