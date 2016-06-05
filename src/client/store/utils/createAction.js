import R from 'ramda';

export default function createAction(type, actionCreator, metaCreator) {
  const finalActionCreator = typeof actionCreator === 'function'
    ? actionCreator
    : R.identity;

  return (...args) => {
    const action = {
      type,
      payload: finalActionCreator(...args),
    };

    if (action.payload instanceof Error) {
      // Handle FSA errors where the payload is an Error object. Set error.
      action.error = true;
    }

    if (typeof metaCreator === 'function') {
      action.meta = metaCreator(...args);
    }

    return action;
  };
}
