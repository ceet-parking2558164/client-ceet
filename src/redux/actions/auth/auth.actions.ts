import {PayloadAction} from '@reduxjs/toolkit';
import {InitialStateUser, Token} from '../../../types/redux/InitialStateUser.ts';
import {removeData, saveDataLocalStorage} from '../../../utils/auth/localStorage.ts';

const actionLogin = (state:InitialStateUser, action:PayloadAction<Token>) => {
    if (action.payload){
        state.loading = false;
        saveDataLocalStorage('token', {token: action.payload.token});
    }
};

const actionLoading = (state:InitialStateUser, action:PayloadAction<boolean>) => {
    state.loading = action.payload;
};

const actionLogout = (state:InitialStateUser) => {
    removeData('token');
    state.user = null;
};

export {actionLogin, actionLogout, actionLoading};
