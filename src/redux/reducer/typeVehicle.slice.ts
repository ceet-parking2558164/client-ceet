import { createSlice } from '@reduxjs/toolkit';
import { InitialStateTypeVehicles } from '../../types/utils/constants/ListOptionsVehicles';
import { getAllTypesVehiclesAction } from '../actions/typtVehicle/typeVehicle.actions';

const initialState:InitialStateTypeVehicles = {
    typesVehicles: []
};

const typeVehicleSlice = createSlice({
    name: 'typeVehicle',
    initialState,
    reducers: {
        getAllTypesVehicles: getAllTypesVehiclesAction
    }
});


export const {getAllTypesVehicles} = typeVehicleSlice.actions;
export {typeVehicleSlice};