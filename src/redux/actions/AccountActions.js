import axios from 'axios';

export const getAccounts = (id) => async (dispatch) => {
	const res = await axios.get(
		`http://localhost:8080/api/v1/accounts/customer/${id}`
	);
	dispatch({
		type: 'UPDATE_ACCOUNTS',
		payload: res.data,
	});

	return res.data;
};

export const openAccount = (account) => async (dispatch) => {
	const res = await axios.post(
		'http://localhost:8080/api/v1/accounts/',
		account
	);
	const customerRes = await axios.get(
		`http://localhost:8080/api/v1/accounts/customer/${account.customer.customer_id}`
	);

	dispatch({
		type: 'UPDATE_ACCOUNTS',
		payload: customerRes.data,
	});

	return res.data;
};
