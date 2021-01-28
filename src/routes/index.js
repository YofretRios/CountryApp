import CountryList from '../components/country/CountryList';
import CountryProfile from '../components/country/CountryProfile';

const Routes = [
  {
    path: '/',
    component: CountryList,
    exact: true
  },
  {
    path: '/:alphacode',
    component: CountryProfile,
    exact: true
  }
];

export default Routes;
