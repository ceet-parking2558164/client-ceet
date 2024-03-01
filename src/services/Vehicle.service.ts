import {parkingApi} from '../api/parkingApi.ts';
import {getAccessToken} from '../utils/auth/localStorage.ts';

class VehicleService {
    async registerVehicle(data:FormData){
        const token = getAccessToken('token');
        return await parkingApi.post('vehicle/register', data, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }

    async getAllVehicles(){
        const token = getAccessToken('token');
        return await parkingApi.get('vehicle/all', {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        });
    }
    async deleteVehicle(vehicleId:string){
        const token = getAccessToken('token');
        return await parkingApi.delete(`vehicle/delete-register/${vehicleId}`, {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        });
    }
}

export {VehicleService};
