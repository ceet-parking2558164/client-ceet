import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from '../reducer/auth.slice.ts';
import {userSlice} from '../reducer/user.slice.ts';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        allUsers: userSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store};




