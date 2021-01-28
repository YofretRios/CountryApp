import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Loading from '../shared/Loading';

import numberFormat from '../../utils/numberFormat';
import { actions } from '../../modules/countryProfile';

const Country = () => {
  const dispatch = useDispatch();
  const { alphacode } = useParams();

  const { data, loading, error } = useSelector((store) => ({
    data: store.countryProfile.data,
    loading: store.countryProfile.loading,
    error: store.countryProfile.error
  }));

  /**
   * Fetch a single country by alphecode
   */
  useEffect(() => {
    dispatch(actions.getByCode({ code: alphacode }));
  }, [alphacode]);

  /**
   * Show error messages when API fails to load the alpha code passed in the url params
   */
  if (error) {
    return (
      <div className="container center">
        <h2>No country data found</h2>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="container center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <div>
          <h1 className="title">Country Profile</h1>
        </div>
      </header>

      <div className="container">
        <div className="country-profile">
          <div className="country-profile-header">
            <h3>
              {data.name}
            </h3>
            <p>
              {data.nativeName}
            </p>
          </div>

          <div className="country-profile-body">
            <dl>
              <div className="country-profile-row">
                <dt>Flag</dt>
                <dd>
                  <img src={data.flag} alt={data.name} />
                </dd>
              </div>

              <div className="country-profile-row">
                <dt>Region</dt>
                <dd>{numberFormat(data.region)}</dd>
              </div>

              <div className="country-profile-row">
                <dt>Subregion</dt>
                <dd>{numberFormat(data.subregion)}</dd>
              </div>

              <div className="country-profile-row">
                <dt>Capital City</dt>
                <dd>{data.capital}</dd>
              </div>

              <div className="country-profile-row">
                <dt>Population</dt>
                <dd>{numberFormat(data.population)}</dd>
              </div>

              <div className="country-profile-row">
                <dt>Currencies</dt>
                <dd>
                  {data.currencies.map((currency) => (
                    <p key={currency.code}>{currency.name} <span>{`(${currency.code})`}</span></p>
                  ))}
                </dd>
              </div>

              <div className="country-profile-row">
                <dt>Timezones</dt>
                <dd>{data.timezones.map((timezone) => <p key={timezone}>{timezone}</p>)}</dd>
              </div>

              <div className="country-profile-row">
                <dt>Languages</dt>
                <dd>{data.languages.map((language) => <p key={language.name}>{language.name}</p>)}</dd>
              </div>

              <div className="country-profile-row">
                <dt>Borders</dt>
                <dd>
                  <ul className="country-profile-borders">
                    {data.borders.map((border) => (
                      <li key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
