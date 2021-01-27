import { createAction, handleActions } from 'redux-actions';
import {
  getAll,
  getByName
} from '../api';

/**
 * Country Actions
 */
const getAllCountriesSuccess = createAction('GET_ALL_SUCCESS');
const getAllCountriesError = createAction('GET_ALL_ERROR');
const getAllCountries = createAction('GET_ALL', () => async (dispatch) => {
  try {
    const { data } = await getAll();

    dispatch(getAllCountriesSuccess(data));
  } catch (ex) {
    dispatch(getAllCountriesError(ex.message));
  }
});

const getCountryByNameSuccess = createAction('GET_COUNTRY_BY_NAME_SUCCESS');
const getCountryByNameError = createAction('GET_COUNTRY_BY_NAME_ERROR');
const getCountryByName = createAction('GET_COUNTRY_BY_NAME', (payload) => async (dispatch) => {
  try {
    const { data } = await getByName(payload.name);

    dispatch(getCountryByNameSuccess(data));
  } catch (ex) {
    dispatch(getCountryByNameError(ex.message));
  }
});

export const actions = {
  getAllCountries,
  getCountryByName
}

/**
* Country Reducer
*/
const defaultState = {
  list: [],
  selectedCountry: null
};

const reducer = handleActions({
  [getAllCountries]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [getAllCountriesError]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [getAllCountriesSuccess]: (state, action) => ({
    ...state,
    loading: false,
    list: action.payload
  })
}, defaultState);

export default reducer;
