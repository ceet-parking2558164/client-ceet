import {Box, Container, Typography} from '@mui/material';
import { CustomInput } from '../../../common/atoms/CustomInput.tsx';
import {CustomSelect} from '../../../common/atoms/CustomSelect.tsx';
import {CustomButton} from '../../../common/atoms/CustomButton.tsx';
import {useFormRegister} from '../../../hooks/useFormRegister/useFormRegister.ts';
import {styleFormUser, styleSx} from './RegisterUser.styles.ts';
import {validateForm, optionsLabelErrors} from './validateForm.ts';
import {ModalError} from '../../../components/ModalError/ModalError.tsx';
import {useRegisterUser} from '../../../hooks/useRegisterUser/useRegisterUser.ts';

const RegisterUser = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        reset,
        setValue
    } = useFormRegister();

    const {rol, documentType} = watch();
    const {handleRegister} = useRegisterUser(reset);
    const errorsForm = validateForm(errors);

    return (
        <Container maxWidth='lg' sx={{mt: 5}}>
            <form style={styleFormUser} onSubmit={handleSubmit(handleRegister)}>
                <Typography variant='h5' sx={{textAlign: 'center', pb: 3}}>Registrar usuario</Typography>
                <Box sx={{display: 'flex', gap: 2, flexDirection: {xs: 'column', md: 'row', lg: 'row'}}}>
                    <Box>
                        <CustomInput
                            label='Nombre completo'
                            sx={styleSx.customInput}
                            error={!!errorsForm.some(err => err.hashError && err.key === 'firstName')}
                            form={register('firstName', optionsLabelErrors.optFirstName)}
                        />
                        <CustomInput
                            label='Contraseña'
                            sx={styleSx.customInput}
                            error={!!errorsForm.some(err => err.hashError && err.key === 'password')}
                            form={register('password', optionsLabelErrors.optPassword)}
                        />
                        <CustomSelect
                            sx={{mb: 2.7}}
                            label='Tipo de documento'
                            error={!!errorsForm.some(err => err.hashError && err.key === 'documentType')}
                            options={['Cedula de ciudadania', ' Tarjeta de identidad',]}
                            value={documentType ? documentType : ''}
                            form={register('documentType', optionsLabelErrors.optDocumentType)}
                            onChange={(event) => {
                                setValue('documentType' , event.target.value as string, { shouldValidate: true });
                            }}
                        />
                        <CustomInput
                            sx={{width: '100%'}}
                            label='Numero de identificacion'
                            error={!!errorsForm.some(err => err.hashError && err.key === 'numberDocument')}
                            form={register('numberDocument', optionsLabelErrors.optNumberDocument)}
                        />
                    </Box>
                    <Box>
                        <CustomInput
                            label='Apellidos'
                            sx={styleSx.customInput}
                            error={!!errorsForm.some(err => err.hashError && err.key === 'lastName')}
                            form={register('lastName', optionsLabelErrors.optLastName)}
                        />
                        <CustomInput
                            label='Numero de celular'
                            sx={styleSx.customInput}
                            error={!!errorsForm.some(err => err.hashError && err.key === 'phoneNumber')}
                            form={register('phoneNumber', optionsLabelErrors.optPhoneNumber)}
                        />
                        <CustomInput
                            label='Correo electronico'
                            sx={styleSx.customInput}
                            error={!!errorsForm.some(err => err.hashError && err.key === 'email')}
                            form={register('email', optionsLabelErrors.optEmail)}
                        />
                        <CustomSelect
                            label='Role del usuario'
                            options={['Usuario', 'Guarda de seguridad', 'Administrador']}
                            error={!!errorsForm.some(err => err.hashError && err.key === 'rol')}
                            value={rol || ''}
                            form={        /* border: 2 */register('rol', optionsLabelErrors.optRol)}
                            onChange={(event) => {
                                setValue('rol' , event.target.value as string, { shouldValidate: true });
                            }}
                        />
                    </Box>
                </Box>
                <CustomButton
                    type='submit'
                    sx={styleSx.customButton}
                    textValue='Registrar'
                    variant='contained'
                />
            </form>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <ModalError  formValidate={errorsForm} />
            </Box>
        </Container>
    );
};

export {RegisterUser};
