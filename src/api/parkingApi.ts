import axios from 'axios';
//https://e51b-181-59-220-38.ngrok-free.app
//http://localhost:3000/api/v1/
const parkingApi = axios.create({
    baseURL: 'http://localhost:3000/api/v1/',
});

export {parkingApi};
