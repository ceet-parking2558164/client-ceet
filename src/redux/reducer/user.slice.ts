import {createSlice} from '@reduxjs/toolkit';
import {getAllUsersAction} from '../actions/admin/users/userAdmin.actions.ts';
import {Users} from '../../types/redux/InitialStateUser.ts';


const initialState:Users = {
    users:null,
    loading: false
};


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllUsers: getAllUsersAction
    }
});

export const {getAllUsers} = userSlice.actions;

export {userSlice};
