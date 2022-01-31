import React from 'react';
import './Dashboard.css';
import logo from '../../assets/logo.png';
import {
	FaCompass,
	FaRegUser,
	FaCcVisa,
	FaCog,
	FaDoorOpen,
} from 'react-icons/fa';
import AccountsComponent from '../../components/Accounts/Accounts';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/actions/UserActions';

const DashboardScreen = () => {
	const [nav, setNav] = React.useState('accounts');
	const currentUser = JSON.parse(sessionStorage.getItem('user'));

	const dispatch = useDispatch();

	return (
		<div className='dashboard-container'>
			<div className='dashboard-sidebar'>
				<div className='dashboard-top'>
					<img src={logo} className='sidebar-logo' />
					<h1 className='sidebar-greeting'>
						Good morning,
						<br />
						{currentUser.customer.name} 🌞
					</h1>
					<div className='sidebar-nav'>
						<span
							className={
								nav === 'overview' ? 'nav-item-active nav-item' : 'nav-item'
							}
						>
							<FaCompass className='nav-icon' />
							Overview
						</span>
						<span
							className={
								nav === 'accounts' ? 'nav-item-active nav-item' : 'nav-item'
							}
						>
							<FaRegUser className='nav-icon' />
							Accounts
						</span>
						<span
							className={
								nav === 'transactions' ? 'nav-item-active nav-item' : 'nav-item'
							}
						>
							<FaCcVisa className='nav-icon' />
							Transactions
						</span>
						<span
							className={
								nav === 'settings' ? 'nav-item-active nav-item' : 'nav-item'
							}
						>
							<FaCog className='nav-icon' />
							Settings
						</span>
					</div>
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
				<AccountsComponent />
			</div>
		</div>
	);
};

export default DashboardScreen;
