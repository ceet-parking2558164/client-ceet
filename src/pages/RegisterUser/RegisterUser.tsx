import {Box, Container, Typography} from '@mui/material';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomSelect} from '../../common/atoms/CustomSelect.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {useFormRegister} from '../../hooks/useFormRegister.ts';
import {styleFormUser, styleSx} from './RegisterUser.styles.ts';
import {FieldValues} from 'react-hook-form';

const RegisterUser = () => {
    const {
        register,
        handleSubmit,
        watch
    } = useFormRegister();

    const {rol, documentType} = watch();

    const handlePrueba = (data: FieldValues) => {
        console.log(data);

    };


    return (
        <Container maxWidth='md' sx={{mt: 5}}>
            <form style={styleFormUser} onSubmit={handleSubmit(handlePrueba)}>
                <Typography variant='h5' sx={{textAlign: 'center'}}>Registrar usuario</Typography>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box>
                        <CustomInput
                            label='Nombre completo'
                            sx={styleSx.customInput}
                            form={register('firstName')}
                        />
                        <CustomInput
                            label='Contraseña'
                            sx={styleSx.customInput}
                            form={register('password')}
                        />
                        <CustomSelect
                            sx={{mb: 2.7}}
                            label='Tipo de documento'
                            options={['Cedula de ciudadania', ' Tarjeta de identidad',]}
                            value={documentType || ''}
                            form={register('documentType')}
                        />
                        <CustomInput
                            sx={{width: '100%'}}
                            label='Numero de identificacion'
                            form={register('numberDocument')}
                        />
                    </Box>
                    <Box>
                        <CustomInput
                            label='Apellidos'
                            sx={styleSx.customInput}
                            form={register('lastName')}
                        />
                        <CustomInput
                            label='Numero de celular'
                            sx={styleSx.customInput}
                            form={register('phoneNumber')}
                        />
                        <CustomInput
                            label='Correo electronico'
                            sx={styleSx.customInput}
                            form={register('email')}
                        />
                        <CustomSelect
                            label='Role del usuario'
                            options={['Usuario', 'Seguridad', 'Administrador']}
                            value={rol || ''}
                            form={register('rol')}
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
        </Container>
    );
};

export {RegisterUser};
