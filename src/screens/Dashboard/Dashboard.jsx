import React from 'react';
import './Dashboard.css';
import logo from '../../assets/logo.png'
import { FaCompass, FaRegUser, FaCcVisa, FaCog } from "react-icons/fa";
import AccountsComponent from '../../components/Accounts/Accounts';

const DashboardScreen = () => {
    const [nav, setNav] = React.useState('accounts');

    return <div className='dashboard-container'>
        <div className='dashboard-sidebar'>
            <img src={logo} className='sidebar-logo' />
            <h1 className='sidebar-greeting'>Good morning,<br />Red. 🌞</h1>
            <div className='sidebar-nav'>
                <span className={nav === 'overview' ? 'nav-item-active nav-item' : 'nav-item'}><FaCompass className='nav-icon' />Overview</span>
                <span className={nav === 'accounts' ? 'nav-item-active nav-item' : 'nav-item'}><FaRegUser className='nav-icon' />Accounts</span>
                <span className={nav === 'transactions' ? 'nav-item-active nav-item' : 'nav-item'}><FaCcVisa className='nav-icon' />Transactions</span>
                <span className={nav === 'settings' ? 'nav-item-active nav-item' : 'nav-item'}><FaCog className='nav-icon' />Settings</span>
            </div>
        </div>
        <div className='dashboard-main-page'>
            <AccountsComponent />
        </div>
    </div>
}

export default DashboardScreen;