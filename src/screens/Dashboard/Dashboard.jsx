import React from 'react';
import './Dashboard.css';
import logo from '../../assets/logo.png';
import { FaCompass, FaRegUser, FaDoorOpen } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/actions/UserActions';
import DashboardMainPageComponent from '../../components/DashboardMainPage/DashboardMainPage';

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
						Hello,
						<br />
						{currentUser.customer.name} 👋
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
				<DashboardMainPageComponent nav={nav} setNav={setNav} />
			</div>
		</div>
	);
};

export default DashboardScreen;
