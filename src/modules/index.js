import { combineReducers } from 'redux';
import countries from './countries';
import countryProfile from './countryProfile';

export default combineReducers({
  countries,
  countryProfile
});
