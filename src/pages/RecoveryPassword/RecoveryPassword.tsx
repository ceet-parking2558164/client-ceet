import {Container, Typography} from '@mui/material';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {styleFormRecovery, sxRecovery} from './RecoveryPassword.styles.ts';
import {useFormRegister} from '../../hooks/useFormRegister.ts';
import {useActionAuth} from '../../hooks/useActionAuth.ts';
import {validateForm} from './ValidateForm.ts';
import {useAppSelector} from '../../hooks/useAppRedux.ts';
import {CustomSpinner} from '../../common/atoms/CustomSpinner.tsx';

const RecoveryPassword = () => {

    const {loading} = useAppSelector(state => state.auth);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useFormRegister();

    const {errorEmail, errorPattern} = validateForm(errors);

    const {handleRecoveryPassword} = useActionAuth();

    return (
        <Container maxWidth='sm' sx={{mt: 20}}>
            {
                loading && (
                    <CustomSpinner />
                )
            }
            <form style={styleFormRecovery} onSubmit={handleSubmit(handleRecoveryPassword)}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>Restablecer la contraseña</Typography>
                <CustomInput
                    sx={sxRecovery.customInput}
                    label='Correo electronico'
                    helperText={errorEmail && 'El email es requerido' ||
                        errorPattern && 'El email no cumple el formato correcto'}
                    form={register('email', {required: true, pattern: /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}
                />
                <CustomButton type='submit' sx={sxRecovery.customButton} textValue='Enviar solicitud' variant='contained'/>
            </form>
        </Container>
    );
};

export {RecoveryPassword};
