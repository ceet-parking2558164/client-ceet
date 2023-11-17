import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from '../reducer/auth.slice.ts';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store};




