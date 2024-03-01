import {createSlice} from '@reduxjs/toolkit';
import {getAllUsersAction, searchUserAction, selectRolUserAction} from '../actions/admin/users/userAdmin.actions.ts';
import {Users} from '../../types/redux/InitialStateUser.ts';

const initialState:Users = {
    users:null,
    copyUsers: null,
    loading: false,
    selectRole: ''
};


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllUsers: getAllUsersAction,
        searchUser: searchUserAction,
        setSelectRole: selectRolUserAction
    }
});

export const {
    getAllUsers,
    searchUser,
    setSelectRole
} = userSlice.actions;

export {userSlice};
