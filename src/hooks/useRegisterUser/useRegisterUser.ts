import {FieldValues, UseFormReset} from 'react-hook-form';
import {registerUserThunk} from '../../redux/actions/admin/users/thunk.ts';

const useRegisterUser = (reset:UseFormReset<FieldValues>) => {
    const handleRegister = async(data: FieldValues) => {
        await registerUserThunk(data);
        reset();
    };

    return {
        handleRegister
    };
};

export {useRegisterUser};
