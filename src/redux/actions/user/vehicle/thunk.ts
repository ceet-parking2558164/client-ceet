import {VehicleService} from '../../../../services/Vehicle.service.ts';
import {alertMessage} from '../../../../utils/alert/AlertMessage.ts';
import {Status} from '../../../../types/utils/alert/AlertMessage.ts';
import {isAxiosError} from 'axios';

const vehicleService = new VehicleService();
interface ErrorCustom {
    error: string
    message: string
    statusCode: number
}

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
