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
}

export {VehicleService};
