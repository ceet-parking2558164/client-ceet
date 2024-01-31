import {Avatar, Box, Container, Divider, ImageList, ImageListItem, Typography} from '@mui/material';
import ImageZoom from 'react-image-zooom';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';
import {useEffect} from 'react';
import {getRequestVehicleThunk} from '../../redux/actions/request/requestThunk.ts';
import {useParams} from 'react-router-dom';

const RequestVehicle = () => {

    const dispatch = useAppDispatch();
    const {requests} = useAppSelector(state => state.requests);

    const {userId} = useParams();
    console.log(requests?.User?.firstName);

    useEffect(() => {
        if (userId){
            dispatch(getRequestVehicleThunk(userId));
        }
    }, [userId, dispatch]);

    return (
        <Container>
            <Box sx={{display: 'flex', justifyContent: 'space-between', mb:5}}>
                <Avatar sx={{width: 120, height: 120}} />
                <Box sx={{display: 'flex', gap: 20}}>
                    <div>
                        <Typography sx={{fontSize: 20}}><strong>Nombres: </strong> {requests?.User?.firstName}</Typography>
                        <Typography sx={{fontSize: 20}}><strong>Apellidos: </strong> {requests?.User?.lastName}</Typography>
                        <Typography sx={{fontSize: 20}}><strong>Tipo de documento: </strong> {requests?.User?.documentType}</Typography>
                        <Typography sx={{fontSize: 20}}><strong>Numero de documento: </strong> {requests?.User?.numberDocument}</Typography>
                    </div>
                    <div>
                        <Typography sx={{fontSize: 20}}><strong>Numero de celular:</strong> {requests?.User?.phoneNumber}</Typography>
                        <Typography sx={{fontSize: 20}}><strong>Email:</strong> {requests?.User?.email}</Typography>
                        <Typography sx={{fontSize: 20}}><strong>Role:</strong> {requests?.User?.rol}</Typography>
                    </div>
                </Box>
            </Box>
            <Divider />
            <Box sx={{mt: 5}}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>Datos del vehículo</Typography>
                <Box sx={{display: 'flex', py: 5, justifyContent: 'space-around'}}>
                    <Box >
                        <Typography sx={{fontSize: 20}}><strong>Marca:</strong> {requests?.Vehicle?.brand}</Typography>
                        <Typography sx={{fontSize: 20}}><strong>Modelo:</strong> {requests?.Vehicle?.model}</Typography>
                        <Typography sx={{fontSize: 20}}><strong>Placa del vehículo:</strong> {requests?.Vehicle?.carPlate}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontSize: 20}}><strong>Color:</strong> {requests?.Vehicle?.color}</Typography>
                        <Typography sx={{fontSize: 20}}><strong>Cilindraje:</strong> {requests?.Vehicle?.cylinderCapacity}.0</Typography>
                    </Box>
                </Box>

                <ImageList>
                    {
                        requests?.Vehicle?.images.map(img => (
                            <ImageListItem  sx={{border: 2}}>
                                <ImageZoom  src={img} zoom="200"/>
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Box>
            <Box sx={{display: 'flex', gap: 2, my: 10}}>
                <CustomButton color='secondary' sx={{width: '50%'}} variant='contained'  textValue='Aceptar Solicitud' />
                <CustomButton color='secondary' sx={{width: '50%'}} variant='contained'  textValue='Rechazar Solicitud' />
            </Box>
        </Container>
    );
};

export {RequestVehicle};
