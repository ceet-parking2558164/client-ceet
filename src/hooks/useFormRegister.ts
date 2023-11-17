import {FieldValues, useForm} from 'react-hook-form';

const useFormRegister = <T extends FieldValues>() => {
    const {
        register,
        handleSubmit,
        watch,
        formState,
        reset
    } = useForm<T>();

    const {errors} = formState;


    return {
        register,
        handleSubmit,
        watch,
        formState,
        reset,
        errors
    };
};

export {useFormRegister};
