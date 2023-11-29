import {VehicleService} from '../../../../services/Vehicle.service.ts';
import {alertMessage} from '../../../../utils/alert/AlertMessage.ts';
import {Status} from '../../../../types/utils/alert/AlertMessage.ts';
import {isAxiosError} from 'axios';
import {ErrorCustom} from '../../../../types/axios/ErrorMessage.ts';

const vehicleService = new VehicleService();


const registerVehicle = async (data:FormData) => {
    try {
        const response = await vehicleService.registerVehicle(data);
        if (response.status === 200){
            alertMessage(response.data.message, Status.success);
        }
    }catch (e) {
        console.error(e);
        if (isAxiosError(e)){
            const error:ErrorCustom = e.response?.data;
            alertMessage(error ? error.message: e.message && 'Inicia el servidor', Status.error );
        }
    }
};

export {registerVehicle};
