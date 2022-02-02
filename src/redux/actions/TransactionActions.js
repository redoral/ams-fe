import axios from 'axios';

export const createTransaction = (transaction) => async (dispatch) => {
	const res = await axios.post(
		'http://localhost:8080/api/v1/transactions',
		transaction
	);
	const transactionRes = await axios.get(
		`http://localhost:8080/api/v1/transactions/account/${transaction.account.account_number}`
	);
	const accountRes = await axios.get('http://localhost:8080/api/v1/accounts');

	dispatch({
		type: 'UPDATE_TRANSACTIONS',
		payload: transactionRes.data,
	});

	dispatch({
		type: 'UPDATE_ACCOUNTS',
		payload: accountRes.data,
	});

	return res.data;
};

export const getTransactions = (accountId) => async (dispatch) => {
	const res = await axios.get(
		`http://localhost:8080/api/v1/transactions/account/${accountId}`
	);
	dispatch({
		type: 'UPDATE_TRANSACTIONS',
		payload: res.data,
	});

	return res.data;
};
