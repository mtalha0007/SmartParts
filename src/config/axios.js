import axios from 'axios';
import { useContext } from 'react';
import { ContextApi } from '../store/context';


export const baseUrl = process.env.REACT_APP_BASE_URL

const instance = axios.create({
  baseURL: 'https://mangomart.mangotech-api.com' + '/api/'

});


instance.interceptors.request.use((request) => {
  let token = localStorage.getItem("token");
  request.headers = {
    'Accept': "application/json, text/plain, /",
    'Authorization': `Bearer ${token}`,
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