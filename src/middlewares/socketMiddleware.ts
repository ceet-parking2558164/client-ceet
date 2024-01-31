import {Middleware} from '@reduxjs/toolkit';
import {RootState} from '../redux/store/typeState.ts';
import {socket} from '../utils/socket/socket.ts';
import {totalMessages} from '../redux/reducer/message.slice.ts';

const socketMiddleware:Middleware<RootState> = (store) => {
    socket?.on('total', (total) => {
        store.dispatch(totalMessages(total));
    });

    return (next) => (action) => {
        next(action);
    };
};

export {socketMiddleware};
