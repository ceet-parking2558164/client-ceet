import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from '../reducer/auth.slice.ts';
import {userSlice} from '../reducer/user.slice.ts';
import {messageSlice} from '../reducer/message.slice.ts';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        allUsers: userSlice.reducer,
        messages: messageSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store};




