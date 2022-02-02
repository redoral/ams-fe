import axios from 'axios';

export const loginUser = (username, password) => async (dispatch) => {
	const res = await axios.post(`http://localhost:8080/api/v1/users/login`, {
		username: username,
		password: password,
	});

	if (res.data.user_id) {
		sessionStorage.setItem('user', JSON.stringify(res.data));
		dispatch({
			type: 'UPDATE_USER',
			payload: res.data,
		});
		window.location.reload();
	}
};

export const registerUser = (user) => async (dispatch) => {
	const res = await axios.post('http://localhost:8080/api/v1/users/', user);

	if (res.data.user_id) {
		sessionStorage.setItem('user', JSON.stringify(res.data));
		dispatch({
			type: 'REGISTER_USER',
			payload: res.data,
		});
		window.location.reload();
	}

	return res.data;
};

export const logOutUser = () => async (dispatch) => {
	sessionStorage.clear();
	dispatch({
		type: 'UPDATE_USER',
		payload: {},
	});
	window.location.reload();
};
