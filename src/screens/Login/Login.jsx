import React from 'react';
import './Login.css';
import LoginFormComponent from '../../components/LoginForm/LoginForm';

const LoginScreen = () => {
	return (
		<div className='login-container'>
			<LoginFormComponent />
			<p style={{ color: '#999', fontWeight: 700, fontSize: 14 }}>
				Made with 💖 by{' '}
				<a href='https://github.com/redoral' target='_blank'>
					Red
				</a>
			</p>
		</div>
	);
};

export default LoginScreen;
