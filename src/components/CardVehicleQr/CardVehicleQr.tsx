import { FC } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { CustomButton } from '../../common/atoms/CustomButton';

interface Prueba {
    vehicle_id?: string,
    model: string,
    carPlate: string,
    color: string,
    firstName: string,
    lastName: string,
    imageProfile: string,
}

const CardVehicleQr: FC<Prueba> = ({ firstName, lastName, color, model, imageProfile, carPlate }) => {
    return (
        <Box sx={{ width: '25%', height: '25%', p: 2, boxShadow: '0px 4px 10px', borderRadius: 5 }}>
            <Box sx={{ display: 'flex', width: '100%', height: '80%', justifyContent: 'space-between' }}>
                <Box sx={{ widows: '50%', height: '50%', display: 'flex', flexDirection: 'column' }}>
                    <Avatar src={imageProfile} sizes='large' alt="img-profile" sx={{ width: 100, height: 100, mb: 1 }} />
                    <Typography variant='h6'> <span style={{ fontWeight: 700 }} >{`${firstName} ${lastName}`}</span> </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='h6'>Placa: <span style={{ fontWeight: 700 }}>{carPlate}</span></Typography>
                    <Typography variant='h6'>Modelo: <span style={{ fontWeight: 700 }}>{model}</span></Typography>
                    <Typography variant='h6'>Color:  <span style={{ fontWeight: 700 }}>{color}</span></Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100%', mt: 1 }}>
                <CustomButton sx={{ width: '50%', fontSize: 20 }} textValue='Ingreso' />
                <CustomButton sx={{ width: '50%', fontSize: 20 }} textValue='Salida' />
            </Box>

        </Box>

    );
};

export { CardVehicleQr };
