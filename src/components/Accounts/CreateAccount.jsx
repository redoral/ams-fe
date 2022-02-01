import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { openAccount } from '../../redux/actions/AccountActions';

const CreateAccountComponent = (props) => {
	const [accountType, setAccountType] = React.useState('Checking');
	const dispatch = useDispatch();

	const customerId = JSON.parse(sessionStorage.getItem('user')).customer
		.customer_id;

	return (
		<div
			className='create-account-container'
			style={{ display: props.display }}
		>
			<span className='account-type-text'>Account type</span>
			<select
				className='account-type-select'
				onChange={(ev) => setAccountType(ev.target.value)}
			>
				<option value='Checking'>Checking</option>
				<option value='Savings'>Savings</option>
			</select>
			<div className='create-account-btns'>
				<span className='cancel-btn' onClick={() => props.setDisplay('none')}>
					Cancel
				</span>
				<span
					className='open-btn'
					onClick={() =>
						dispatch(
							openAccount({
								current_balance: 0.0,
								account_type: accountType,
								customer: {
									customer_id: customerId,
								},
							})
						)
					}
				>
					Open
				</span>
			</div>
		</div>
	);
};

export default CreateAccountComponent;
