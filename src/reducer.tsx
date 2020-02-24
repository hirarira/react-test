import { Reducer } from 'redux';
import { CounterAction, CounterActionType } from './action/counter';

// State
export interface CounterState {
	count: number
}

export const initState:CounterState = {
	count: 0
}

const counterReducer: Reducer<CounterState, CounterAction> = (
	state: CounterState = initState,
	action: CounterAction
): CounterState => {
	switch(action.type){
		case CounterActionType.DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		case CounterActionType.INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		case CounterActionType.RESET:
			return {
				...state,
				count: 0,
			};	
		default: 
			return state
	}
};

export default counterReducer;
