import {Grid} from '@mui/material';
import {Link} from 'react-router-dom';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {routesAdmin, routesGlobals} from '../../utils/constants/routes.ts';

const DashBoard = () => {
    return (
        <Grid container spacing={2} sx={{gap:5, justifyContent: 'center'}} >
            <Grid item xs={6} md={4}>
                <Link to={`${routesGlobals.ROOT}/admin${routesAdmin.USERS}`}>
                    <CustomButton
                        variant='contained'
                        textValue='Ver usuarios registrados'
                        sx={{width: '100%'}}
                    />
                </Link>
            </Grid>
            <Grid item xs={6} md={4} >
                <CustomButton
                    variant='contained'
                    textValue='Ver Vehiculos registrados'
                    sx={{width: '100%'}}
                />
            </Grid>
            <Grid item xs={6} md={4} >
                <CustomButton
                    variant='contained'
                    textValue='BUscar usuario registrado'
                    sx={{width: '100%'}}
                />
            </Grid>
            <Grid item xs={6} md={4}>
                <CustomButton
                    variant='contained'
                    textValue='Historial del vehiculo'
                    sx={{width: '100%'}}
                />
            </Grid>
        </Grid>
    );
};

export {DashBoard};