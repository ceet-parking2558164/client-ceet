import {Box, CircularProgress, Typography} from '@mui/material';

const CustomSpinner = () => {
    return (
        <Box sx={{
            position: 'absolute',
            zIndex: 10, height: 150,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            top: '50%',
            left: '43%',
            p: 4,
            bgcolor: 'rgba(255,107,0,0.39)',
            borderRadius: 10
        }}>
            <CircularProgress size={100} color='secondary'/>
            <Typography variant='h3'>Cargando...</Typography>
        </Box>
    );
};

export {CustomSpinner};
