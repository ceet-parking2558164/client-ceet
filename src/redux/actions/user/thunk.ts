import {UserService} from '../../../services/user/User.service.ts';
import {AppDispatch} from '../../store/typeState.ts';
import {setLoading, updateUser, userAct} from '../../reducer/auth.slice.ts';
import {alertMessage} from '../../../utils/alert/AlertMessage.ts';
import {Status} from '../../../types/utils/alert/AlertMessage.ts';
import axios from 'axios';
import {ErrorCustom} from '../../../types/axios/ErrorMessage.ts';
import {removeData} from '../../../utils/auth/localStorage.ts';

const userService = new UserService();


const getUserToken = (token: string) => {
    return async function (dispatch: AppDispatch) {
        try {
            dispatch(setLoading(true));
            const response = await userService.getUserByToken(token);
            if (response.status === 200) {
                dispatch(userAct(response.data));
                return response.data;
            }
        } catch (e) {
            console.error(e);
            if (axios.isAxiosError(e)){
                removeData('token');
            }
            dispatch(setLoading(false));
        }
    };
};

const updateUserThunk = (data:FormData) => {
    return async function(dispatch:AppDispatch){
        try {
            dispatch(setLoading(true));
            const response = await userService.updateUser(data);
            if (response.status === 200){
                dispatch(updateUser(response.data));
                dispatch(setLoading(false));
                alertMessage('Usuario actualizado correctamente', Status.success);
            }
        }catch (e) {
            console.error(e);
            dispatch(setLoading(false));
            if (axios.isAxiosError(e)){
                dispatch(setLoading(false));
                const error:ErrorCustom = e.response?.data;
                alertMessage(error ? error.message: e.message && 'Inicia el servidor', Status.error );
            }
        }
    };
};

export {getUserToken, updateUserThunk};
