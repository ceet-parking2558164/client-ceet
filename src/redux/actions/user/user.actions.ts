import {PayloadAction} from '@reduxjs/toolkit';
import {InitialStateUser} from '../../../types/redux/InitialStateUser.ts';
import {ResponseUser} from '../../../types/Response/User.ts';

const getUserAction = (state: InitialStateUser, action: PayloadAction<ResponseUser>) => {
    state.loading = false;
    state.user = action.payload;
};

const updateUserAction = (state: InitialStateUser, action:PayloadAction<ResponseUser>) => {
    state.user = action.payload;
};

export {getUserAction, updateUserAction};
