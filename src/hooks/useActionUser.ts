import {useAppDispatch} from './useAppRedux.ts';
import {changePassword, loginUser, recoveryPassword} from '../redux/actions/auth/thunk.ts';
import {FieldValues} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {routesGlobals, routesPublics} from '../utils/constants/routes.ts';
import {alertMessage} from '../utils/alert/AlertMessage.ts';
import {Status} from '../types/alert/AlertMessage.ts';

const useActionUser = (token?:string | null) => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleLogin = async (data: FieldValues) => {
        await dispatch(loginUser(data));
        navigate(`${routesGlobals.ROOT}`);
    };

    const handleRecoveryPassword = async(data:FieldValues) => {
        await dispatch(recoveryPassword(data));
        navigate(`${routesPublics.LOGIN}`);
    };

    const handleNewPassword = async (data:FieldValues) => {

        if (data.password === data.newPassword){
            if (!token) alertMessage('deber tener un token de verificacion', Status.error);
            else {
                const infoResetPassword:{password:string, token:string} = {
                    password: data.password,
                    token: token
                };
                await dispatch(changePassword(infoResetPassword));
                navigate(`${routesPublics.LOGIN}`);
            }
        }else {
            alertMessage('No coinciden las contraseñas', Status.error);
        }
    };

    return {
        handleLogin,
        handleRecoveryPassword,
        handleNewPassword
    };
};

export {useActionUser};
