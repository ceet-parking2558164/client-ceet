import {createSlice} from '@reduxjs/toolkit';
import {Vehicles} from '../../types/redux/initialStateVehicle.ts';
import {getAllVehiclesActions} from '../actions/admin/vehicles/vehicle.actions.ts';

const initialState:Vehicles = {
    vehicles: []
};

const vehicleSlice = createSlice({
    name: 'Vehicles',
    initialState,
    reducers: {
        getAllVehicles: getAllVehiclesActions
    }
});

export const {getAllVehicles} = vehicleSlice.actions;
export {vehicleSlice};

