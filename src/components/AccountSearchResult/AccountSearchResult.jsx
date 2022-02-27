import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccounts } from '../../redux/actions/AccountActions';
import './AccountSearchResult.css';

const AccountSearchResultComponent = (props) => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getAccounts(props.searchResult.customer_id));
	}, [props.searchResult]);

	const accounts = useSelector((state) => state.accounts);

	if (!props.searchResult.name) {
		return (
			<div className='account-view-container-error'>
				<p>No results.</p>
			</div>
		);
	} else {
		return (
			<div className='account-view-container'>
				<h1 className='customer-name'>{props.searchResult.name}</h1>
				<p className='customer-address'>{props.searchResult.email}</p>
				<p className='customer-address'>{props.searchResult.address}</p>
				<div className='account-list-container'>
					<h1 className='accounts-title'>Accounts</h1>
					<div className='accounts-list-scroll'>
						{accounts
							? accounts.map((account) => {
									return (
										<div
											className='account-item'
											key={account.account_number}
										>
											<span className='account-num-text'>
												{account.account_number}
											</span>
											<span className='balance-text'>
												{account.account_type}
											</span>
											<span className='balance-text'>
												$
												{account.current_balance.toFixed(
													2
												)}{' '}
												current balance
											</span>
										</div>
									);
							  })
							: ''}
					</div>
				</div>
			</div>
		);
	}
};

export default AccountSearchResultComponent;
