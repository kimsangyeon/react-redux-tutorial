import {createAction, handleActions} from 'redux-actions';

/**
 * action type
 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/**
 * action object
 */
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

/**
 * reducer
 */
const initialState = {
  number: 0
};

/**
function counter(state = initialState, action) {
  switch(action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}
*/

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({number: state.number + 1}),
    [DECREASE]: (state, action) => ({number: state.number - 1}),
  },
  initialState,
);

export default counter;