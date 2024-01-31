import {PayloadAction} from '@reduxjs/toolkit';
import {InitialStateRequest, RequestVehicle} from '../../../types/redux/initialStateRequest.ts';

const getDetailReqVehicleAction = (state:InitialStateRequest, action:PayloadAction<RequestVehicle>) => {
    state.requests = action.payload;
};

export {getDetailReqVehicleAction};
