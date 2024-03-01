import {createSlice} from '@reduxjs/toolkit';
import {InitialStateRequest, RequestVehicle} from '../../types/redux/initialStateRequest.ts';
import {getAllRequestsAction, getDetailReqVehicleAction} from '../actions/request/request.action.ts';


const initialState:InitialStateRequest = {
    detail_request: {} as RequestVehicle,
    requests: []
};


const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        detailRequestUser: getDetailReqVehicleAction,
        getAllRequestsSlice: getAllRequestsAction
    }
});

export const {detailRequestUser, getAllRequestsSlice} = requestSlice.actions;
export {requestSlice};
