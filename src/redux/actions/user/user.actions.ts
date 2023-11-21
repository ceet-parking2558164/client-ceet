import {PayloadAction} from '@reduxjs/toolkit';
import {InitialStateUser} from '../../../types/redux/InitialStateUser.ts';
import {ResponseUser} from '../../../types/pages/form/User.ts';

const getUserAction = (state: InitialStateUser, action: PayloadAction<ResponseUser>) => {
    state.loading = false;
    state.user = action.payload;

};

export {getUserAction};
