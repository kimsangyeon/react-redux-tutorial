import React, {useCallback} from 'react';
import {useSelect, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';

const CounterContainer = () => {
  const number = useSelect(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()));
  const onDecrease = useCallback(() => dispatch(decrease()));
  return (
    <Counter number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default CounterContainer;

/**
const mapStateToProps = state => ({
  number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
 */

 /**
export default connect(
  // mapStateToProp
  state => ({
    number: state.counter.number,
  }),
  // mapDispatchToProps
  dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  }),
)(CounterContainer);
*/

/**
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch,
    )
)(CounterContainer);
*/

/**
export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
*/