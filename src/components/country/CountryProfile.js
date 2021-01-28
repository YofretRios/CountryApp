import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';

import { actions } from '../../modules/countryProfile';

const Country = () => {
  const dispatch = useDispatch();
  const { alphacode } = useParams();

  const { data, loading, error } = useSelector((store) => ({
    data: store.countryProfile.data,
    loading: store.countryProfile.loading,
    error: store.countryProfile.searchError
  }));

  /**
   * Fetch a single country by alphecode
   */
  useEffect(() => {
    dispatch(actions.getByCode({ code: alphacode }));
  }, [alphacode]);

  if (loading || !data) {
    return <Loading />
  }

  return (
    <>
      <header className="header">
        <div>
          <h1 className="title">{data.name}</h1>
        </div>
      </header>

      <div className="container">
        <p>Detail</p>
      </div>
    </>
  );
}

export default Country;
