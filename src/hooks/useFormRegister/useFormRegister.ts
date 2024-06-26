import {FieldValues, useForm} from 'react-hook-form';

const useFormRegister = <T extends FieldValues>() => {
    const {
        register,
        handleSubmit,
        watch,
        formState,
        reset,
        setValue

    } = useForm<T>();

    const {errors} = formState;


    return {
        register,
        handleSubmit,
        watch,
        formState,
        reset,
        errors,
        setValue
    };
};

export {useFormRegister};
