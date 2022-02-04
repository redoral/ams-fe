import React from 'react';
import logo from '../../assets/logo.png';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/actions/UserActions';
import { FaDoorOpen } from 'react-icons/fa';
import './ManagerDash.css';

const ManagerDashScreen = () => {
	const dispatch = useDispatch();
	const currentUser = JSON.parse(sessionStorage.getItem('user'));

	return (
		<div className='dashboard-container'>
			<div className='dashboard-sidebar'>
				<div className='dashboard-top'>
					<img src={logo} className='sidebar-logo' />
					<h1 className='sidebar-greeting'>
						Hello,
						<br />
						{currentUser.customer.name} 👋
					</h1>
				</div>
				<div className='dashboard-bottom'>
					<span
						className='sign-out-btn nav-item    '
						onClick={() => dispatch(logOutUser())}
					>
						<FaDoorOpen className='nav-icon' />
						Sign out
					</span>
				</div>
			</div>
			<div className='dashboard-main-page'>
				<h1 className='search-text'>Search for an account</h1>
				<div className='search-bar'>
					<form style={{ display: 'flex', flex: 1 }}>
						<input
							type='text'
							className='search-bar-input'
							placeholder='Account number'
						/>
						<input type='submit' className='search-btn' />
					</form>
				</div>
				<div className='accounts-add-container'></div>
			</div>
		</div>
	);
};

export default ManagerDashScreen;
