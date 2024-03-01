import axios from 'axios';
import {AuthService} from '../../../services/auth/Auth.service.ts';
import {AppDispatch} from '../../store/typeState.ts';
import {login, setLoading} from '../../reducer/auth.slice.ts';
import {FieldValues} from 'react-hook-form';
import {alertMessage} from '../../../utils/alert/AlertMessage.ts';
import {Status} from '../../../types/utils/alert/AlertMessage.ts';
import {ErrorCustom} from '../../../types/axios/ErrorMessage.ts';

const authService = new AuthService();

const loginUser = (payload: FieldValues) => {
    return async function (dispatch: AppDispatch) {
        try {
            dispatch(setLoading(true));
            const response = await authService.auth(payload);
            if (response.status === 200) {
                dispatch(login(response.data));
            }

        } catch (e) {
            console.error(e);
            if (axios.isAxiosError(e)) {
                const error: ErrorCustom = e.response?.data;
                dispatch(setLoading(false));
                alertMessage(error ? error.message : e.message && 'Inicia el servidor', Status.error);
            }
        }
    };
};

const recoveryPassword = (data:FieldValues) => {
    return async function (dispatch:AppDispatch) {
        try {
            dispatch(setLoading(true));
            const response = await authService.recoveryPass(data);
            if (response.status === 200){
                const data:{msg:string} = response.data;
                alertMessage(data.msg, Status.success);
                dispatch(setLoading(false));
            }

        }catch (e) {
            console.error(e);
            dispatch(setLoading(false));
            if (axios.isAxiosError(e)){
                const error:ErrorCustom = e.response?.data;
                alertMessage(error ? error.message : e.message && 'Inicia el servidor', Status.error );
            }
        }
    };
};

const changePassword = (data:FieldValues) => {
    return async function(dispatch:AppDispatch){
        try {
            dispatch(setLoading(false));
            const response = await authService.changePassword(data);
            if (response.status === 200){
                const dataResponse = response.data;
                dispatch(setLoading(false));
                alertMessage(dataResponse.message, Status.success);
            }
        }catch (e) {
            console.error(e);
            if (axios.isAxiosError(e)){
                dispatch(setLoading(false));
                const error:ErrorCustom = e.response?.data;
                alertMessage(error ? error.message: e.message && 'Inicia el servidor', Status.error );
            }
        }
    };
};

export {loginUser, recoveryPassword, changePassword};
