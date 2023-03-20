import fetch from 'react-native-fetch-polyfill';
// polyfill(global);
// import fetch from 'node-fetch';
import axios from 'axios';

export const getUsers = async () => {
  const response = await axios.get('/users');

  const data = await response.josn();
  console.log(data);
  return response.json();
};
