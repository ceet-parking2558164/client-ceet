import {Avatar, Box, Container, Typography} from "@mui/material";
import {CameraAlt} from "@mui/icons-material";
import {CustomInput} from "../../common/atoms/CustomInput.tsx";
import {CustomButton} from "../../common/atoms/CustomButton.tsx";
import {stylesForm, styleSx} from "./ProfileUser.styles.ts";

const ProfileUser = () => {
    return (
        <Container sx={{ mt: 10 }} >
            <form style={stylesForm}>
                <Typography variant='h3' sx={styleSx.title}>Perfil</Typography>
                <Box sx={styleSx.boxAvatar}>
                    <Avatar sx={{width: 200, height: 200}} />
                    <CameraAlt sx={styleSx.iconCamera} />
                    <input type='file' style={{display: 'none'}}/>
                </Box>
                <Box sx={styleSx.boxInputs}>
                    <Box sx={styleSx.boxInputPar}>
                        <CustomInput sx={{width: '50%'}} label='Nombres' />
                        <CustomInput sx={{width: '50%'}} label='Apellidos'/>
                    </Box>
                    <Box sx={styleSx.boxInputPar}>
                        <CustomInput sx={{width: '50%'}} label='Celular' />
                        <CustomInput sx={{width: '50%'}} label='Email'/>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <CustomButton  sx={{mt: 2, width: '50%'}} textValue='Guardar' variant='contained'/>
                </Box>
            </form>

        </Container>
    );
};

export {ProfileUser};
