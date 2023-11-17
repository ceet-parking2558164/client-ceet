import axios from 'axios';
import {AuthService} from '../../../services/Auth.service.ts';
import {AppDispatch} from '../../store/store.ts';
import {login, setLoading} from '../../reducer/auth.slice.ts';
import {FieldValues} from 'react-hook-form';
import {alertMessage} from '../../../utils/alert/AlertMessage.ts';
import {Status} from '../../../types/alert/AlertMessage.ts';


interface ErrorCustom {
    error: string
    message: string
    statusCode: number
}

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

export {loginUser};
