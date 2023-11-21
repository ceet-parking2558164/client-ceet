import {Container, Typography} from '@mui/material';
import {useSearchParams} from 'react-router-dom';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {styleFormReset, sxReset} from './ResetPassword.styles.ts';
import {useFormRegister} from '../../hooks/useFormRegister.ts';
import {useActionAuth} from '../../hooks/useActionAuth.ts';
import {validateForm} from './validateForm.ts';

const ResetPassword = () => {

    const [searchParams] = useSearchParams();

    const token:string|null = searchParams.get('token');

    const {
        register,
        handleSubmit,
        errors,
    } =useFormRegister();

    const {handleNewPassword} = useActionAuth(token);

    const {
        errorPassword,
        errorMinPassword,
        errorMaxPassword,
        errorNewPassword,
        errorMinNewPassword,
        errorMaxNewPassword
    } = validateForm(errors);



    return (
        <Container maxWidth='sm' sx={{mt: 20}}>
            <form style={styleFormReset} onSubmit={handleSubmit(handleNewPassword)}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>Ingresa la nueva contraseña</Typography>
                <CustomInput
                    sx={sxReset.inputCustom}
                    label='Nueva contraseña'
                    password='Password'
                    form={register('password', {required: true, minLength: 8, maxLength: 12})}
                />
                {errorMinPassword
                    && <Typography sx={{color: '#d32f2f', fontSize: '0.90rem'}}
                    >la contraseña debe ser minimo de 8 caracteres
                    </Typography> ||
                    errorMaxPassword
                    && <Typography sx={{color: '#d32f2f', fontSize: '0.90rem'}}
                    >la contraseña debe ser maximo de 12 caracteres</Typography> ||
                    errorPassword && <Typography sx={{color: '#d32f2f', fontSize: '0.90rem'}}>
                        El campo contraseña es requerido
                    </Typography>
                }
                <CustomInput
                    sx={sxReset.inputCustom}
                    label='Repita la contraseña'
                    password='Passowrd'
                    form={register('newPassword', {required: true, minLength: 8, maxLength: 12})}
                />
                {errorMinNewPassword
                    && <Typography sx={{color: '#d32f2f', fontSize: '0.90rem'}}
                    >la contraseña debe ser minimo de 8 caracteres
                    </Typography> ||
                    errorMaxNewPassword
                    && <Typography sx={{color: '#d32f2f', fontSize: '0.90rem'}}
                    >la contraseña debe ser maximo de 12 caracteres</Typography> ||
                    errorNewPassword && <Typography sx={{color: '#d32f2f', fontSize: '0.90rem'}}>
                        El campo contraseña es requerido
                    </Typography>
                }
                <CustomButton
                    type='submit'
                    sx={sxReset.buttonCustom}
                    textValue='Restablecer' variant='contained'
                />
            </form>
        </Container>
    );
};

export {ResetPassword};
