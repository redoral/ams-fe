const userReducer = (state, action) => {
	const newState = { ...state };
	switch (action.type) {
		case 'LOGIN_USER':
			newState.user = action.payload;
			return newState;
		case 'LOGOUT_USER':
			newState.user = action.payload;
		case 'REGISTER_USER':
			newState.user = action.payload;
		default:
			return newState;
	}
};

export default userReducer;
