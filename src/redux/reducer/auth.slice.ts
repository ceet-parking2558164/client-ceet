import {createSlice} from '@reduxjs/toolkit';
import {InitialStateUser} from '../../types/redux/InitialStateUser.ts';
import {actionLogin, actionLogout, actionLoading} from '../actions/auth/auth.actions.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';
import {getUserAction, updateUserAction} from '../actions/user/user.actions.ts';


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
        updateUser: updateUserAction,
        setLoading: actionLoading,
    }
});

export const {
    logout,
    userAct,
    setLoading,
    login,
    updateUser
} = authSlice.actions;
export {authSlice};
