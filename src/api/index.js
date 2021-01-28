import axios from 'axios';

export const getAll = () => axios.get('https://restcountries.eu/rest/v2/all');

export const getByName = (name) => axios.get(`https://restcountries.eu/rest/v2/name/${name}`);

export const getByAlphaCode = (code) => axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);

const api = {
  getAll,
  getByName,
  getByAlphaCode
}

export default api;
