import {NewPassword} from '../../types/pages/errorForm/ErrorsLoginForm.ts';
import {FieldErrors} from 'react-hook-form';
import {FormNewPassword} from '../../types/pages/ResetPassword/FormNewPassword.ts';


const validateForm = (errors: FieldErrors<FormNewPassword>): NewPassword => {
    return {
        errorPassword: errors.password?.type === 'required',
        errorMinPassword: errors.password?.type === 'minLength',
        errorMaxPassword: errors.password?.type === 'maxLength',
        errorNewPassword: errors.newPassword?.type === 'required',
        errorMinNewPassword: errors.newPassword?.type === 'minLength',
        errorMaxNewPassword: errors.newPassword?.type === 'maxLength'
    };
};

export {validateForm};
