import axios from 'axios';

export const createTransaction = (transaction) => async (dispatch) => {
	console.log(transaction);

	try {
		await axios.post('http://localhost:8080/api/v1/transactions', transaction);
		const res = await axios.get(
			`http://localhost:8080/api/v1/transactions/account/${transaction.account.account_number}`
		);
		const accountRes = await axios.get('http://localhost:8080/api/v1/accounts');

		dispatch({
			type: 'UPDATE_TRANSACTIONS',
			payload: res.data,
		});

		dispatch({
			type: 'UPDATE_ACCOUNTS',
			payload: accountRes.data,
		});
	} catch (e) {
		return e;
	}
};

export const getTransactions = (accountId) => async (dispatch) => {
	try {
		const res = await axios.get(
			`http://localhost:8080/api/v1/transactions/account/${accountId}`
		);
		dispatch({
			type: 'UPDATE_TRANSACTIONS',
			payload: res.data,
		});
	} catch (e) {
		return e;
	}
};
