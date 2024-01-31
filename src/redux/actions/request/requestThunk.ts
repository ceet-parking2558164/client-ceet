import {RequestService} from '../../../services/request/Request.service.ts';
import {AppDispatch} from '../../store/store.ts';
import {detailRequestUser} from '../../reducer/requests.slice.ts';

const requestService = new RequestService();

const getRequestVehicleThunk = (userId:string) => {
    return async function(dispatch:AppDispatch){
        try {
            const response = await requestService.getDetailRequestUser(userId);
            dispatch(detailRequestUser(response.data))
;        }catch (e) {
            console.error(e);
        }
    };
};


export {getRequestVehicleThunk};
