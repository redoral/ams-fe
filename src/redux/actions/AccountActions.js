import axios from 'axios';

export const getAccounts = (id) => async (dispatch) => {
	try {
		const res = await axios.get(
			`http://localhost:8080/api/v1/accounts/customer/${id}`
		);
		dispatch({
			type: 'UPDATE_ACCOUNTS',
			payload: res.data,
		});
	} catch (e) {
		return e;
	}
};

export const openAccount = (account) => async (dispatch) => {
	try {
		await axios.post('http://localhost:8080/api/v1/accounts/', account);
		const res = await axios.get(
			`http://localhost:8080/api/v1/accounts/customer/${account.customer.customer_id}`
		);

		dispatch({
			type: 'UPDATE_ACCOUNTS',
			payload: res.data,
		});
		window.location.reload();
	} catch (e) {
		return e;
	}
};
