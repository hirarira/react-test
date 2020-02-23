import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { increment, decrement } from '../action/counter';
import Counter from '../component/reduxCounter';
import { CounterState } from '../reducer';

interface StateProps {
    count: number;
}

interface DispatchProps {
    decrement: () => void,
    increment: () => void,
}

const mapStateToProps = (state: CounterState): StateProps => ({
    count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch):DispatchProps => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);