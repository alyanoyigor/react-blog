import axios from 'axios';

const { REACT_APP_API } = process.env;

const client = axios.create({
  baseURL: REACT_APP_API,
});

client.interceptors.response.use(
  (response) => response.data,
  (response) => {
    const error = response.response.data || response.response.statusText;
    return Promise.reject(error);
  }
);

export default client;
