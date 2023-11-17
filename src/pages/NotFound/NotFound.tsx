import {Box, Typography} from '@mui/material';
import imgNotFound from '../../assets/not found.gif';

const NotFound = () => {
    return (
        <Box sx={{textAlign: 'center', mt: 20}}>
            <Typography variant='h3'>Pagina no encontrada 404</Typography>
            <img style={{borderRadius: '10px'}} src={imgNotFound} alt='pagina no encontrada'/>
        </Box>
    );
};

export {NotFound};
