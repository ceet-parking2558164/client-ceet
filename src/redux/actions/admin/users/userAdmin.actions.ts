import {Users} from '../../../../types/redux/InitialStateUser.ts';
import {PayloadAction} from '@reduxjs/toolkit';
import {ResponseUser} from '../../../../types/Response/User.ts';

const getAllUsersAction = (state:Users, action:PayloadAction<ResponseUser[]>) => {
    state.users = action.payload;
};

export {getAllUsersAction};
