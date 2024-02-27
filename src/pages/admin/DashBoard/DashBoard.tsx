import {Grid} from '@mui/material';
import {Link} from 'react-router-dom';
import {CustomButton} from '../../../common/atoms/CustomButton.tsx';
import {routesAdmin, routesGlobals} from '../../../utils/constants/routes.ts';
import { People, DirectionsCar, Note, Timeline } from '@mui/icons-material';

const DashBoard = () => {
    return (
        <Grid container spacing={2} sx={{gap:5, justifyContent: 'center',mt: 5, p:3}} >
            <Grid item xs={12} md={4} >
                <Link to={`${routesGlobals.ROOT}/admin${routesAdmin.USERS}`}>
                    <CustomButton
                        variant='contained'
                        textValue='Usuarios registrados'
                        sx={{width: '100%'}}
                        startIcon={<People sx={{ height: 60, width: 60,pr:3 }} />}
                    />
                </Link>
            </Grid>
            <Grid item xs={12} md={4} >
                <Link to={`${routesGlobals.ROOT}/admin${routesAdmin.VEHICLES}`}>
                    <CustomButton
                        variant='contained'
                        textValue='Vehiculos registrados'
                        sx={{width: '100%'}}
                        startIcon={<DirectionsCar sx={{ height: 60, width: 60, pr: 3 }} />}
                    />
                </Link>
            </Grid>
            <Grid item xs={12} md={4} >
                <Link to={`${routesGlobals.ROOT}/admin${routesAdmin.REQUEST}`}>
                    <CustomButton
                        variant='contained'
                        textValue='Solicitudes'
                        sx={{width: '100%'}}
                        startIcon={<Note sx={{ height: 60, width: 60, pr: 3 }} />}
                    />
                </Link>
            </Grid>
            <Grid item xs={12} md={4}>
                <CustomButton
                    variant='contained'
                    textValue='Historial del vehiculo'
                    sx={{width: '100%'}}
                    startIcon={<Timeline sx={{ height: 60, width: 60, pr: 3 }} />}
                />
            </Grid>
        </Grid>
    );
};

export {DashBoard};
