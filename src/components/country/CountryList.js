import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import Card from './Card';
import Loading from '../shared/Loading';

import { actions } from '../../modules/countries';
import debounce from '../../utils/debounce';

const CountryList = () => {
  const dispatch = useDispatch();
  const { list, loading, searchError } = useSelector((store) => ({
    list: store.countries.list,
    loading: store.countries.loading,
    searchError: store.countries.searchError
  }));

  const [search, setSearch] = useState('');

  /**
   * Debounce Redux action to avoid too many functions calls and store updates
   */
  const debounceQuery = useCallback(debounce((value) => {
    dispatch(actions.getCountryByName({ name: value }));
  }, 350), []);

  /**
   * Fetch all countries, this actions will only run once
   */
  useEffect(() => {
    dispatch(actions.getAllCountries());
  }, []);

  const onInputChange = (e) => {
    setSearch(e.target.value);
    debounceQuery(e.target.value);
  };

  const inputClass = clsx('w-full', { error: !!searchError });

  return (
    <>
      <header className="header">
        <div>
          <h1 className="title">CountryApp</h1>
        </div>
      </header>

      <div className="container">
        <div className="input-container">
          <input className={inputClass} placeholder="Search by Name" onChange={onInputChange} value={search} />
          {loading && <Loading className="absolute" />}
          {!!searchError && <p className="error-hint">No country data found</p>}
        </div>
        {list.map((country) => <Card key={country.numericCode} data={country} />)}
      </div>
    </>
  )
}

export default CountryList
