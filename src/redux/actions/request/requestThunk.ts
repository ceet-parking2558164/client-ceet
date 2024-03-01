import {RequestService} from '../../../services/request/Request.service.ts';
import {AppDispatch} from '../../store/typeState.ts';
import {detailRequestUser, getAllRequestsSlice} from '../../reducer/requests.slice.ts';
import {alertMessage} from '../../../utils/alert/AlertMessage.ts';
import {Status} from '../../../types/utils/alert/AlertMessage.ts';

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

const updateRequestThunk = async(reqId:string, data:{status: string}) => {
    try {
        const response = await requestService.updateRequest(reqId, data);
        if (response.status === 200){
            alertMessage(response.data, Status.success);
        }
    }catch (e) {
        console.error(e);
    }
};

const getAllRequestsThunk = () => {
    return async function(dispatch:AppDispatch){
        try {
            const response = await requestService.getAllRequests();
            if (response.status === 200){
                dispatch(getAllRequestsSlice(response.data));
            }
        }catch (e) {
            console.error(e);
        }
    };
};


export {
    getRequestVehicleThunk,
    getAllRequestsThunk,
    updateRequestThunk
};
