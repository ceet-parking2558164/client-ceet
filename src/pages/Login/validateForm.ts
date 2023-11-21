import {ErrorsLoginForm} from '../../types/pages/errorForm/ErrorsLoginForm.ts';
import {FieldErrors} from 'react-hook-form';
import {Login} from '../../types/pages/LoginUser/Login.ts';


const validateForm = (errors: FieldErrors<Login>): ErrorsLoginForm => {
    return {
        errorEmail: errors.email?.type === 'required',
        errorPattern: errors.email?.type === 'pattern',
        errorPassword: errors.password?.type === 'required',
        errorMinPassword: errors.password?.type === 'minLength',
        errorMaxPassword: errors.password?.type === 'minLength'
    };
};

export {validateForm};
