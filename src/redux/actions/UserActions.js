import axios from 'axios';

export const loginUser = (username, password) => async (dispatch) => {
	try {
		const res = await axios.post(`http://localhost:8080/api/v1/users/login`, {
			username: username,
			password: password,
		});

		if (res.data.user_id) {
			sessionStorage.setItem('user', JSON.stringify(res.data));
			dispatch({
				type: 'LOGIN_USER',
				payload: res.data,
			});
			window.location.reload();
		}
	} catch (e) {
		return e;
	}
};

export const logOutUser = () => async (dispatch) => {
	try {
		sessionStorage.clear();
		dispatch({
			type: 'LOGOUT_USER',
			payload: {},
		});
		window.location.reload();
	} catch (e) {
		return e;
	}
};

export const registerUser = (user) => async (dispatch) => {
	try {
		const res = await axios.post('http://localhost:8080/api/v1/users/', user);
		sessionStorage.setItem('user', JSON.stringify(res.data));
		dispatch({
			type: 'REGISTER_USER',
			payload: res.data,
		});
		window.location.reload();
	} catch (e) {
		return e;
	}
};
