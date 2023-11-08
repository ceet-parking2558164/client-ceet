import {Link} from "react-router-dom";
import {Container, Typography, Box} from "@mui/material";
import {Lock} from "@mui/icons-material";
import {CustomInput} from "../../common/atoms/CustomInput.tsx";
import {CustomButton} from "../../common/atoms/CustomButton.tsx";
import {routesPublics} from "../../utils/constants/routes.ts";
import {styleFormLogin} from "./LoginForm.styles.ts";
import {stylesLink} from "../../styles/links.styles.ts";


const LoginForm = () => {
    return (
        <Container maxWidth='sm' sx={{mt: 20}} >
            <div style={{ position: 'relative' }} >
                <div style={styleFormLogin.divEffect}></div>
                <form style={styleFormLogin.formContainer}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Lock fontSize='large' />
                    </Box>
                    <Typography variant='h3' textAlign='center'>Iniciar Sesion</Typography>
                    <CustomInput
                        label='Correo electronico'
                    />
                    <CustomInput
                        password='Passowrd'
                    />
                    <CustomButton textValue='Ingresar' variant='contained' />
                    <Link to={routesPublics.RECOVERY} style={stylesLink}>
                        <Typography variant='subtitle1'>Olvidaste contraseña?</Typography>
                    </Link>
                </form>
            </div>
        </Container>
    );
};

export {LoginForm};
