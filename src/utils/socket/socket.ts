import io from 'socket.io-client';

let socket = null;

const initSocket = () => {
    socket = io('http://localhost:3000');
};

export {initSocket, socket};
