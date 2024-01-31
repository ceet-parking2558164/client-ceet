import {isAxiosError} from 'axios';
import {UserAdminService} from '../../../../services/admin/UserAdmin.service.ts';
import {AppDispatch} from '../../../store/store.ts';
import {getAllUsers} from '../../../reducer/user.slice.ts';
import {alertMessage} from '../../../../utils/alert/AlertMessage.ts';
import {Status} from '../../../../types/utils/alert/AlertMessage.ts';
import {ErrorCustom} from '../../../../types/axios/ErrorMessage.ts';
import {FieldValues} from 'react-hook-form';

const userAdminService = new UserAdminService();

const getAllUserThunk = () => {
    return async function(dispatch:AppDispatch){
        try {
            const response = await userAdminService.getAllUsers();
            if (response.status === 200){
                dispatch(getAllUsers(response.data));
            }
        }catch (e) {
            console.error(e);
        }
    };
};

const deleteUserThunk = async(idUser:string) => {
    try {
        const response = await userAdminService.deleteUserById(idUser);
        if (response.status === 200){
            alertMessage(response.data, Status.success);
        }

    }catch (e) {
        console.error(e);
        if (isAxiosError(e)){
            const error: ErrorCustom = e.response?.data;
            alertMessage(error ? error.message : e.message && 'Inicia el servidor', Status.error);
        }
    }
};

const registerUserThunk = async(data:FieldValues) => {
    try {
        const response = await userAdminService.registerUser(data);
        if (response.status === 200){
            alertMessage(response.data.message, Status.success);
        }
    }catch (e) {
        console.error(e);
        if (isAxiosError(e)){
            const error: ErrorCustom = e.response?.data;
            alertMessage(error ? error.message : e.message && 'Inicia el servidor', Status.error);
        }
    }
};

export {getAllUserThunk, deleteUserThunk, registerUserThunk};
