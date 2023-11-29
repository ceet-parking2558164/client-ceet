import {FieldErrors} from 'react-hook-form';
import {ErrorsFormRecovery} from '../../types/pages/errorForm/ErrorsLoginForm.ts';
import {FormRecoveryPassword} from '../../types/pages/RecoveryPassword/FormRecoveryPassword.ts';

const validateForm = (errors: FieldErrors<FormRecoveryPassword>): ErrorsFormRecovery => {
    return {
        errorEmail: errors.email?.type === 'required',
        errorPattern: errors.email?.type === 'pattern',
    };
};

export {validateForm};
