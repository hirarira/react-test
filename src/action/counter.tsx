export enum CounterActionType {
    DECREMENT = 'COUNTER/DECREMENT',
    INCREMENT = 'COUNTER/INCREMENT',
}

export interface CounterAction {
    type: CounterActionType;
    amount?: number
}

export const decrement = (): CounterAction => ({
    type: CounterActionType.DECREMENT,
})

export const increment = (): CounterAction => ({
    type: CounterActionType.INCREMENT,
})
