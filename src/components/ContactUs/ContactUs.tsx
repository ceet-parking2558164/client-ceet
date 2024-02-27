import {Box, Container, Typography} from '@mui/material';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {FacebookRounded, Instagram, EmailRounded, LocationCity, Phone} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import {stylesLink} from '../../styles/links.styles.ts';
const ContactUs = () => {
    return (
        <Container sx={{py: 5, width: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                <Typography variant='h2'>CONTACT US</Typography>
                <Typography variant='body1' sx={{fontSize: 20, fontFamily: 'monospace'}}>
                    ¿Preguntas, sugerencias o problemas? Estamos aquí para ayudarte. Contáctanos<br/>
                    y resolveremos cualquier inquietud. ¡Bienvenido al parqueadero SENA!
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', pt: 10, flexDirection: { xs: 'column', sm: 'row'} }}>
                <form style={{display: 'flex', flexDirection: 'column', gap: 10, width: '80%', padding:35, backgroundColor: '#ffffff', borderRadius: 15}}>
                    <CustomInput label='Nombre'/>
                    <CustomInput label='Correo electronico'/>
                    <CustomInput label='Mensaje' rows='4' multiline/>
                    <CustomButton textValue='Enviar' variant='contained'/>
                </form>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', width: '100%'}}>
                    <Typography variant='h4' sx={{fontWeight: 800}}>Siguenos</Typography>
                    <Box sx={{display: 'flex', gap: 5}}>
                        <Link to='/' style={stylesLink}>
                            <FacebookRounded fontSize='large'/>
                        </Link>
                        <Link to='/' style={stylesLink}>
                            <Instagram fontSize='large'/>
                        </Link>
                        <Link to='/' style={stylesLink}>
                            <EmailRounded fontSize='large'/>
                        </Link>
                    </Box>
                    <Box sx={{pt: 3}}>
                        <Typography variant='body2' align={'center'}>
                            CENTRO DE ELECTRICIDAD, ELECTRÓNICA Y TELECOMUNICACIONES <br/>
                            Regional Distrito Capital
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 2}}>
                            <Box sx={{display:'flex', alignItems: 'center'}}>
                                <LocationCity fontSize='large' sx={{mr: 2}}/>
                                <Typography variant='body2' align={'center'}>
                                    Cra 30 No. 17-91 Sur. Bogotá
                                </Typography>
                            </Box>
                            <Box sx={{display:'flex', alignItems: 'center'}}>
                                <Phone fontSize='large' sx={{mr: 7}}/>
                                <Typography>5461500 Ext: 14915</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Typography align='center' sx={{pt: 10}}>© 2024 Politicas de privacidad</Typography>
        </Container>
    );
};

export {ContactUs};
