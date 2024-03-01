import {Users} from '../../../../types/redux/InitialStateUser.ts';
import {PayloadAction} from '@reduxjs/toolkit';
import {ResponseUser} from '../../../../types/Response/User.ts';

const getAllUsersAction = (state:Users, action:PayloadAction<ResponseUser[]>) => {
    state.users = action.payload;
    state.copyUsers = action.payload;
};

const searchUserAction = (state:Users, action:PayloadAction<string>) => {
    if (state.selectRole){
        state.copyUsers = state.users?.filter(usr => (usr.rol === state.selectRole))
            .filter(usr => usr.firstName.toLowerCase()
                .includes(action.payload) || usr.lastName.toLowerCase()
                .includes(action.payload));
    }else {
        state.copyUsers = state.users?.filter(usr => usr.lastName.toLowerCase()
            .includes(action.payload) || usr.firstName.toLowerCase().includes(action.payload));
    }
};

const selectRolUserAction = (state:Users, action:PayloadAction<string>) => {
    state.selectRole = action.payload;
    state.copyUsers = state.users?.filter((usr => (usr.rol === state.selectRole)));
};
export {getAllUsersAction, searchUserAction, selectRolUserAction};
