const Reducer = (state, action) => {
	const newState = { ...state };
	switch (action.type) {
		case 'UPDATE_USER':
			newState.user = action.payload;
			return newState;
		case 'UPDATE_ACCOUNTS':
			newState.accounts = action.payload;
			return newState;
		case 'UPDATE_TRANSACTIONS':
			newState.transactions = action.payload;
			return newState;
		default:
			return newState;
	}
};

export default Reducer;
