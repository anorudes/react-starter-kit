import { createAction, createReducer } from '../../utils';

// -----------------------------------------------------------------------------
// Константы
// -----------------------------------------------------------------------------
export const types = {
  SET_RUNTIME_VARIABLE: '@@LAPPSE/SET_RUNTIME_VARIABLE',
};

// -----------------------------------------------------------------------------
// Экшены
// -----------------------------------------------------------------------------
export const setRuntimeVariable = createAction(
  types.SET_RUNTIME_VARIABLE,
);

// -----------------------------------------------------------------------------
// Редюсер
// -----------------------------------------------------------------------------
const initialState = {};

export default createReducer({
  [types.SET_RUNTIME_VARIABLE]: (state, { payload }) => (
    state.set(payload.name, payload.value)
  ),
}, initialState);
