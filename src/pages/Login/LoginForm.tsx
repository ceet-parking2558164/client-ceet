import {Link} from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import {Lock, MeetingRoom} from '@mui/icons-material';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {routesPublics} from '../../utils/constants/routes.ts';
import {styleFormLogin} from './LoginForm.styles.ts';
import {stylesLink} from '../../styles/links.styles.ts';
import {useFormRegister} from '../../hooks/useFormRegister/useFormRegister.ts';
import {useActionAuth} from '../../hooks/useAuth/useActionAuth.ts';
import {validateForm} from './validateForm.ts';
import {useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';

const LoginForm = () => {

    const isLoading = useAppSelector(state => state.auth.loading);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useFormRegister();

    const {handleLogin} = useActionAuth();

    const {
        errorEmail,
        errorPattern,
        errorPassword,
        errorMinPassword,
        errorMaxPassword
    } = validateForm(errors);


    return (
        <Box  sx={{display: 'flex', minHeight: 'calc(100vh - 96px);',justifyContent: 'center', alignItems: 'center'}}>
            <div style={{position: 'relative', width: '30%'}}>
                <div style={styleFormLogin.divEffect}></div>
                <form style={styleFormLogin.formContainer} onSubmit={handleSubmit(handleLogin)}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Lock fontSize='large'/>
                    </Box>
                    <Typography variant='h3' textAlign='center'>Iniciar Sesion</Typography>
                    <CustomInput
                        label='Correo electronico'
                        error={errorEmail || errorPattern}
                        helperText={errorEmail && 'El email es requerido' ||
                            errorPattern && 'El email no cumple el formato correcto'}
                        form={register('email', {required: true, pattern: /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}
                    />
                    <CustomInput
                        error={errorPassword || errorMinPassword || errorMaxPassword}
                        helperText={errorPassword && 'El password requerido '}
                        password='Passowrd'
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
                    <LoadingButton
                        loading={isLoading}
                        variant='contained'
                        endIcon={<MeetingRoom/>}
                        loadingPosition='end'
                        type='submit'
                    >
                        <span>Iniciar sesion</span>
                    </LoadingButton>
                    <Link to={routesPublics.RECOVERY} style={stylesLink}>
                        <Typography variant='subtitle1'>Olvidaste contraseña?</Typography>
                    </Link>
                </form>
            </div>

        </Box>
    );
};

export {LoginForm};
