import {AppDispatch} from '../../../store/typeState.ts';
import {VehicleService} from '../../../../services/Vehicle.service.ts';
import {getAllVehicles} from '../../../reducer/vehicle.slice.ts';
import {alertMessage} from '../../../../utils/alert/AlertMessage.ts';
import {Status} from '../../../../types/utils/alert/AlertMessage.ts';

const vehicleService = new VehicleService();

const getAllVehiclesThunk = () => {
    return async function(dispatch:AppDispatch){
        try {
            const response = await vehicleService.getAllVehicles();
            if (response.status === 200){
                dispatch(getAllVehicles(response.data));
            }
        }catch (e) {
            console.error(e);
        }
    };
};

const deleteVehicleThunk = async(id:string) => {
    try {
        const response = await vehicleService.deleteVehicle(id);
        if (response.status === 200){
            alertMessage(response.data.message, Status.success);
        }
    }catch (e) {
        console.error(e);
    }
};

export {getAllVehiclesThunk, deleteVehicleThunk};