import axios from 'axios';
//http://localhost:3000/api/v1/
const parkingApi = axios.create({
  baseURL: 'https://api-ceet.onrender.com/api/v1',
});

export {parkingApi};
