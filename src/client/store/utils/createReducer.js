import R from 'ramda';
import Immutable from 'immutable';

export default function createReducer(handlers, initialState) {
  return (state = initialState, action = {}) => {
    // eslint-disable-next-line no-param-reassign
    state = Immutable.Iterable.isIterable(state)
      ? state
      : Immutable.fromJS(state);

    return R.propIs(Function, action.type, handlers)
        ? handlers[action.type](state, action)
        : Immutable.fromJS(state);
  };
}
