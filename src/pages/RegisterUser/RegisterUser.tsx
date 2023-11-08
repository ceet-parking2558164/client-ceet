import {Box, Container, Typography} from "@mui/material";
import {CustomInput} from "../../common/atoms/CustomInput.tsx";
import {CustomSelect} from "../../common/atoms/CustomSelect.tsx";
import {CustomButton} from "../../common/atoms/CustomButton.tsx";
import {styleFormUser, styleSx} from "./RegisterUser.styles.ts";

const RegisterUser = () => {
    const documentType = 'Cedula'
    const rol = 'Usuario'
    return (
        <Container maxWidth='md' sx={{mt: 5}}>
            <form style={styleFormUser}>
                <Typography variant='h5' sx={{textAlign: 'center'}}>Registrar usuario</Typography>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box>
                        <CustomInput label='Nombre completo' sx={styleSx.customInput} />
                        <CustomInput label='Contraseña' sx={styleSx.customInput}/>
                        <CustomSelect
                            sx={{mb: 3}}
                            label='Tipo de documento'
                            options={['Cedula de ciudadania', ' Tarjeta de identidad', ]}
                            valueSelect={documentType}
                        />
                        <CustomInput
                            sx={{ width: '100%', mb: 3 }}
                            label='Numero de identificacion'
                        />
                    </Box>
                    <Box>
                        <CustomInput label='Apellidos' sx={styleSx.customInput}/>
                        <CustomInput label='Numero de celular' sx={styleSx.customInput}/>
                        <CustomInput label='Correo electronico' sx={styleSx.customInput}/>
                        <CustomSelect
                            label='Role del usuario'
                            options={['Usuario', 'Seguridad', 'Administrador']}
                            valueSelect={rol}
                        />
                    </Box>
                </Box>
                <CustomButton sx={styleSx.customButton} textValue='Registrar' variant='contained' />
            </form>
        </Container>
    );
};

export {RegisterUser};
