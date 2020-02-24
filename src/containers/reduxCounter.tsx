import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { increment, decrement, reset } from '../action/counter';
import ReduxCounter from '../component/reduxCounter';
import { CounterState } from '../reducer';

interface StateProps {
    count: number;
}

interface DispatchProps {
    decrement: () => void,
    increment: () => void,
    reset: () => void,
}

const mapStateToProps = (state: CounterState): StateProps => ({
    count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch):DispatchProps => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
    reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);