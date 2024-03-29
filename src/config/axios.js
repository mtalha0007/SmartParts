import axios from 'axios';


export const baseUrl = process.env.REACT_APP_BASE_URL

const instance = axios.create({
  baseURL: 'https://mangomart.mangotech-api.com' + '/api/'

});

instance.interceptors.request.use((request) => {

  request.headers = {
    'Accept': "application/json, text/plain, /",

    'timezone': new Date().getTimezoneOffset(),
    'route': window.location.pathname
  }
  return request
});

instance.interceptors.response.use((response) => {
  if (response) {
    return response
  }
}, (error) =>
  Promise.reject(
    error
  )
);

export default instance;