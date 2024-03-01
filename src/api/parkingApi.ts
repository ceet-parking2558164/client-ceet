import axios from 'axios';
//http://localhost:3000/api/v1/
const parkingApi = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
});

export {parkingApi};
