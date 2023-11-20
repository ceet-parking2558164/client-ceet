import {FieldErrors} from 'react-hook-form';
import {ErrorsFormRecovery} from '../../types/form/errorForm/ErrorsLoginForm.ts';
import {FormRecoveryPassword} from '../../types/form/FormRecoveryPassword.ts';


const validateForm = (errors: FieldErrors<FormRecoveryPassword>): ErrorsFormRecovery => {
    return {
        errorEmail: errors.email?.type === 'required',
        errorPattern: errors.email?.type === 'pattern',
    };
};

export {validateForm};
