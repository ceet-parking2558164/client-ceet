import axios from 'axios';
//http://localhost:3000/api/v1/
//http://192.168.226.119:3006/
const parkingApi = axios.create({
  baseURL: 'http://192.168.226.119:3000/api/v1/',
});

export {parkingApi};




