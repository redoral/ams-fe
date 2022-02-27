import React from 'react';
import logo from '../../assets/logo.png';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/actions/UserActions';
import { FaSearch, FaDoorOpen, FaUserPlus } from 'react-icons/fa';
import './ManagerDash.css';
import DashboardMainPageComponent from '../../components/DashboardMainPage/DashboardMainPage';

const ManagerDashScreen = () => {
	const dispatch = useDispatch();
	const currentUser = JSON.parse(sessionStorage.getItem('user'));
	const [nav, setNav] = React.useState('searchAccount');

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
								nav === 'searchAccount'
									? 'nav-item-active nav-item'
									: 'nav-item'
							}
						>
							<FaSearch className='nav-icon' />
							Search account
						</span>
						<span
							className={
								nav === 'createAccount'
									? 'nav-item-active nav-item'
									: 'nav-item'
							}
						>
							<FaUserPlus className='nav-icon' />
							Create a new account
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

export default ManagerDashScreen;
