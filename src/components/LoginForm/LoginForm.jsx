import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import { loginUser } from '../../redux/actions/UserActions';

const LoginFormComponent = (props) => {
	const [username, setUsername] = React.useState();
	const [password, setPassword] = React.useState();

	const dispatch = useDispatch();

	return (
		<div className='login-box'>
			<img src={logo} className='login-box-logo' />
			<input
				type='text'
				placeholder='Username'
				className='login-box-input'
				onChange={(ev) => {
					setUsername(ev.target.value);
				}}
			/>
			<input
				type='password'
				placeholder='Password'
				className='login-box-input'
				onChange={(ev) => {
					setPassword(ev.target.value);
				}}
			/>
			<span
				className='login-submit-button'
				onClick={() => dispatch(loginUser(username, password))}
			>
				Sign in
			</span>
			<p
				className='sign-up-text'
				onClick={() => props.setCurrentView('register')}
			>
				No account? Sign up
			</p>
		</div>
	);
};

export default LoginFormComponent;
