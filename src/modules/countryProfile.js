import { createAction, handleActions } from 'redux-actions';
import { getByAlphaCode } from '../api';

/**
 * Country Profile Actions
 */
const getByCodeSuccess = createAction('GET_BY_CODE_SUCCESS');
const getByCodeError = createAction('GET_BY_CODE_ERROR');
const getByCode = createAction('GET_BY_CODE', (payload) => async (dispatch) => {
  try {
    const { data } = await getByAlphaCode(payload.code);

    dispatch(getByCodeSuccess(data));
  } catch (ex) {
    dispatch(getByCodeError(ex.message));
  }
});

export const actions = { getByCode };

/**
* Country Profile Reducer
*/
const defaultState = {
  data: null,
  loading: false,
  error: null
};

const reducer = handleActions({
  [getByCode]: (state) => ({
    ...state,
    loading: true,
    error: null
  }),
  [getByCodeError]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  }),
  [getByCodeSuccess]: (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
    error: null
  })
}, defaultState);

export default reducer;
