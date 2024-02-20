
import { TypeVehicleService } from '../../../services/type-vehicles/typeVehicle.service';
import { AppDispatch } from '../../store/typeState';
import { getAllTypesVehicles } from '../../reducer/typeVehicle.slice';

const typeVehicle = new TypeVehicleService();

const getAllTypesVehiclesThunk = () => {
    return async function(dispatch:AppDispatch){
        try {
            const response = await typeVehicle.getAllTypesVehicles();
            if(response.status === 200){
                dispatch(getAllTypesVehicles(response.data));
            }
        }catch(e){
            console.error(e);
            
        }
    } ;
};

export {getAllTypesVehiclesThunk};