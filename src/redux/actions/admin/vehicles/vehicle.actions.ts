import {Vehicles, InitialStateVehicle} from '../../../../types/redux/initialStateVehicle.ts';
import {PayloadAction} from '@reduxjs/toolkit';

const getAllVehiclesActions = (state:Vehicles, action:PayloadAction<InitialStateVehicle[]>) => {
    state.vehicles = action.payload;
};

export {getAllVehiclesActions};