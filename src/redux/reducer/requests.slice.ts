import {createSlice} from '@reduxjs/toolkit';
import {InitialStateRequest, RequestVehicle} from '../../types/redux/initialStateRequest.ts';
import {getDetailReqVehicleAction} from '../actions/request/request.action.ts';


const initialState:InitialStateRequest = {
    requests: {} as RequestVehicle
};


const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        detailRequestUser: getDetailReqVehicleAction
    }
});

export const {detailRequestUser} = requestSlice.actions;
export {requestSlice};
