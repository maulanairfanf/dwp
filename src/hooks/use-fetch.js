import axios from 'axios';
// import { TOKEN } from '../constant/auth';
// import Cookies from 'universal-cookie';

// const cookie = new Cookies();

const fetch = axios.create({
  baseURL: process.env.API_URL, 
});


// fetch.interceptors.request.use(
//   (config) => {
//     const accessToken = cookie.get(TOKEN, {path: '/'})

//     if (accessToken) {
//       if (config.headers) config.headers.token = accessToken;
//     }
//     return config;
//   },
//   (error) => {

//     return Promise.reject(error);
//   }
// );



// fetch.interceptors.response.use(
//   (response) => {

//     return response;
//   },
//   (error) => {

//     return Promise.reject(error);
//   }
// );

export default fetch;