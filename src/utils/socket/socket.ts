import io, {Socket} from 'socket.io-client';

let socket: null | Socket = null;

const initSocket = () => {
    socket = io('http://localhost:3000');
};

export {initSocket, socket};
