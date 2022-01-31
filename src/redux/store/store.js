import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from '../reducers/Reducer';

export const Store = createStore(
	Reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
