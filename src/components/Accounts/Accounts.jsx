import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAccounts } from '../../redux/actions/AccountActions';
import CreateAccountComponent from '../CreateAccount/CreateAccount';
import './Accounts.css';

const AccountsComponent = (props) => {
	const [display, setDisplay] = React.useState('none');
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(
			getAccounts(
				JSON.parse(sessionStorage.getItem('user')).customer.customer_id
			)
		);
	}, []);

	const data = useSelector((state) => state.accounts);
	return (
		<div className='accounts-container'>
			<div className='accounts-header'>
				<h1 className='main-page-header'>Your accounts</h1>
				<span className='open-account-btn' onClick={() => setDisplay('flex')}>
					Open a new account
				</span>
			</div>
			<CreateAccountComponent display={display} setDisplay={setDisplay} />
			{data
				? data.map((account) => {
						return (
							<div
								className='account-item'
								key={account.account_number}
								onClick={() => {
									props.setNav('viewAccount');
									props.setAccount(account);
								}}
							>
								<span className='account-num-text'>
									{account.account_number}
								</span>
								<span className='balance-text'>{account.account_type}</span>
								<span className='balance-text'>
									${account.current_balance.toFixed(2)} current balance
								</span>
							</div>
						);
				  })
				: ''}
		</div>
	);
};

export default AccountsComponent;
