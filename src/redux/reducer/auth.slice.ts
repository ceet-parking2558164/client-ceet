import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateUser} from '../../types/redux/InitialStateUser.ts';
import {actionLogin, actionLogout} from '../actions/auth/auth.actions.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';
import {getUserAction} from '../actions/user/user.actions.ts';


const initialState: InitialStateUser = {
    user: getAccessToken('user')?.user || null,
    loading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: actionLogin,
        logout: actionLogout,
        userAct: getUserAction,
        setLoading: (state: InitialStateUser, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
});

export const {logout, userAct, setLoading, login} = authSlice.actions;
export {authSlice};
