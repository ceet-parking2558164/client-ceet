import {Container, Typography} from '@mui/material';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {styleFormRecovery, sxRecovery} from './RecoveryPassword.styles.ts';

const RecoveryPassword = () => {
    return (
        <Container maxWidth='sm' sx={{mt: 20}}>
            <form style={styleFormRecovery}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>Restablecer la contraseña</Typography>
                <CustomInput sx={sxRecovery.customInput} label='Correo electronico'/>
                <CustomButton sx={sxRecovery.customButton} textValue='Enviar solicitud' variant='contained'/>
            </form>
        </Container>
    );
};

export {RecoveryPassword};
