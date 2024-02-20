import { PayloadAction } from '@reduxjs/toolkit';
import { InitialStateTypeVehicles, ListOptionsVehicles } from '../../../types/utils/constants/ListOptionsVehicles';

const getAllTypesVehiclesAction = (state:InitialStateTypeVehicles, action:PayloadAction<ListOptionsVehicles[]>) => {
    state.typesVehicles = action.payload;
};

export {getAllTypesVehiclesAction};