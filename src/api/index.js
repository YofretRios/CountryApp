import axios from 'axios';

export const getAll = () => axios.get('https://restcountries.eu/rest/v2/all');

export const getByName = (name) => axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);

const api = {
  getAll,
  getByName
}

export default api;
