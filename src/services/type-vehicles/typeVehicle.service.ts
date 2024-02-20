import { parkingApi } from '../../api/parkingApi';


class TypeVehicleService {
    async getAllTypesVehicles(){
        return await parkingApi.get('type-vehicle/all-types-vehicles');
    }
}


export {TypeVehicleService};