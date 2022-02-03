import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	createTransaction,
	getTransactions,
} from '../../redux/actions/TransactionActions';
import { CSVLink } from 'react-csv';
import axios from 'axios';

const ViewAccountComponent = (props) => {
	const [balance, setBalance] = React.useState();
	const [transactionType, setTransactionType] = React.useState('Deposit');
	const [fromDate, setFromDate] = React.useState();
	const [toDate, setToDate] = React.useState();
	const [csvData, setCsvData] = React.useState([{}]);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getTransactions(props.account.account_number));
	}, []);

	const transactions = useSelector((state) => state.transactions);

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
						<div className='recent-transactions-box'>
							{transactions
								?.sort((a, b) => {
									return b.transaction_id - a.transaction_id;
								})
								.map((transaction) => {
									return (
										<div
											key={transaction.transaction_id}
											className='transaction-item'
										>
											<div>
												<p className='transaction-balance-text'>
													{transaction.transaction_type !== 'Deposit'
														? '-'
														: ''}
													${transaction.current_balance.toFixed(2)}
												</p>
												<p className='transaction-type-text'>
													{transaction.transaction_type}
												</p>
											</div>
											<div>
												<p className='transaction-date-text'>
													{transaction.transaction_date.substring(0, 10)}
												</p>
											</div>
										</div>
									);
								})}
						</div>
					</div>
					<div className='actions-container'>
						<h2 className='quick-actions-text'>Deposit & withdraw</h2>
						<div className='action-box'>
							<input
								type='number'
								className='balance-input'
								placeholder='Balance'
								onChange={(ev) => setBalance(ev.target.value)}
							/>
							<input
								type='number'
								className='balance-input'
								placeholder='Confirm balance'
							/>
							<select
								className='balance-input'
								onChange={(ev) => setTransactionType(ev.target.value)}
							>
								<option value='Deposit'>Deposit</option>
								<option value='Withdraw'>Withdraw</option>
							</select>
							<span
								className='open-btn'
								style={{ alignSelf: 'flex-end' }}
								onClick={() =>
									dispatch(
										createTransaction({
											transaction_date: new Date(Date.now()).toISOString(),
											transaction_type: transactionType,
											transaction_sub_type: 'Debit',
											current_balance: balance,
											account: {
												account_number: props.account.account_number,
											},
										})
									)
								}
							>
								Submit
							</span>
						</div>
						<h2 className='quick-actions-text'>Download transactions</h2>
						<div className='action-box'>
							<span className='input-label'>From</span>
							<input
								type='date'
								className='balance-input'
								onChange={(ev) => setFromDate(ev.target.value)}
							/>
							<span className='input-label'>To</span>
							<input
								type='date'
								className='balance-input'
								onChange={(ev) => setToDate(ev.target.value)}
							/>
							<CSVLink
								className='open-btn csv-download-btn'
								style={{ alignSelf: 'flex-end' }}
								data={csvData}
								asyncOnClick={true}
								onClick={() => {
									axios
										.get(
											`http://localhost:8080/api/v1/transactions/account/${
												props.account.account_number
											}/${new Date(fromDate).toISOString()}/${new Date(
												toDate
											).toISOString()}`
										)
										.then((res) => setCsvData(res.data));
								}}
							>
								Download
							</CSVLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewAccountComponent;
