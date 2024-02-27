import axios from 'axios';
//https://f75f-181-59-220-38.ngrok-free.app
//http://localhost:3000/api/v1/
const parkingApi = axios.create({
  baseURL: 'https://9ecc-181-59-220-38.ngrok-free.app/api/v1',
});

export {parkingApi};
