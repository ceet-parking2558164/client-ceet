import {Container, Typography} from "@mui/material";
import {CustomInput} from "../../common/atoms/CustomInput.tsx";
import {CustomButton} from "../../common/atoms/CustomButton.tsx";
import {styleFormReset, sxReset} from "./ResetPassword.styles.ts";

const ResetPassword = () => {
    return (
        <Container maxWidth='sm' sx={{mt: 20}}>
            <form style={styleFormReset}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>Ingresa la nueva contraseña</Typography>
                <CustomInput sx={sxReset.inputCustom} label='Nueva contraseña' password='Password' />
                <CustomInput sx={sxReset.inputCustom} label='Repita la contraseña' password='Password' />
                <CustomButton sx={sxReset.buttonCustom} textValue='Restablecer' variant='contained'/>
            </form>
        </Container>
    );
};

export {ResetPassword};
