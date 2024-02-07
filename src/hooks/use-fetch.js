import axios from 'axios';

const fetch = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.API_URL, 
});

export default fetch;