import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { create } from 'domain';

function counter(state:any, action:any) {
	switch(action.type){
		case 'INCREMENT':
			return {
				counter: state.counter + 1,
				message: 'INCREMENT'
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
