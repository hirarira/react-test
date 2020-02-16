import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// State
interface state {
	counter: number,
	message: string
}

const defaultState:state = {
	counter: 0,
	message: 'COUNTER'
}

// Action
interface action {
	type: string,
	text: string
}

// Reducer
function counter(state:state = defaultState, action:action) {
	switch(action.type){
		case 'INCREMENT':
			return {
				counter: state.counter + 1,
				message: 'INCREMENT'
			};
		case 'DECREMENT':
			return {
				counter: state.counter - 1,
				message: 'DECREMENT'
			};
		default:
			return state;
	}
}

const store = createStore(counter);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
