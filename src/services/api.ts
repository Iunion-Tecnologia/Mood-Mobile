
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lunion-mood.herokuapp.com/',
});

export default api;