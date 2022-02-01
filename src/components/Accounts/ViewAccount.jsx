import React from 'react';
import { useSelector } from 'react-redux';

const ViewAccountComponent = (props) => {
	return (
		<div className='accounts-actions-container'>
			<div className='accounts-container'>
				<div className='account-view-header'>
					<span
						className='go-back-btn'
						onClick={() => props.setNav('accounts')}
					>
						Go back
					</span>
					<h1 className='main-page-header'>
						Account {props.account.account_number}
					</h1>
					<h1 className='main-page-subheader'>
						${props.account.current_balance.toFixed(2)} current balance
					</h1>
				</div>
				<div className='account-view-body'>
					<div className='recent-transactions'>
						<h2 className='recent-transactions-text'>Recent transactions</h2>
						<div className='recent-transactions-box'></div>
					</div>
					<div className='actions-container'>
						<h2 className='quick-actions-text'>Deposit & withdraw</h2>
						<div className='action-box'></div>
						<h2 className='quick-actions-text'>Download transactions</h2>
						<div className='action-box'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewAccountComponent;
