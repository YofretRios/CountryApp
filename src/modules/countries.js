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
    let response = [];

    /**
     * get all countries if no search field is passed to the action
     */
    if (payload.name !== '') {
      response = await getByName(payload.name);
    } else {
      response = await getAll();
    }

    dispatch(getCountryByNameSuccess(response.data));
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
  selectedCountry: null,
  loading: false,
  error: null,
  searchError: null
};

const reducer = handleActions({
  [getAllCountries]: (state) => ({
    ...state,
    loading: true,
    error: null
  }),
  [getAllCountriesError]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  }),
  [getAllCountriesSuccess]: (state, action) => ({
    ...state,
    loading: false,
    list: action.payload,
    error: null
  }),
  [getCountryByName]: (state) => ({
    ...state,
    loading: true
  }),
  [getCountryByNameError]: (state, action) => ({
    ...state,
    loading: false,
    searchError: action.payload
  }),
  [getCountryByNameSuccess]: (state, action) => ({
    ...state,
    loading: false,
    list: action.payload,
    searchError: null
  })
}, defaultState);

export default reducer;
