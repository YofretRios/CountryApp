import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';

import { actions } from '../../modules/countries';

const CountryList = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((store) => ({
    list: store.countries.list,
    loading: store.countries.loading,
  }));

  useEffect(() => {
    dispatch(actions.getAllCountries());
  }, []);

  return (
    <>
      <header className="header">
        <div>
          <h1 className="title">CountryApp</h1>
        </div>
      </header>

      <div className="container">
        {list.map((country) => <Card key={country.numericCode} data={country} />)}
      </div>
    </>
  )
}

export default CountryList
