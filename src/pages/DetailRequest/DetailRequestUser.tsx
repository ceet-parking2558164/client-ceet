import {Avatar, Box, Container, Divider, ImageList, ImageListItem, Typography} from '@mui/material';
import ImageZoom from 'react-image-zooom';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';
import {useEffect} from 'react';
import {getRequestVehicleThunk, updateRequestThunk} from '../../redux/actions/request/requestThunk.ts';
import {useParams} from 'react-router-dom';

const DetailRequestUser = () => {

    const dispatch = useAppDispatch();
    const {detail_request} = useAppSelector(state => state.requests);

    const {userId} = useParams();


    useEffect(() => {
        if (userId){
            dispatch(getRequestVehicleThunk(userId));
        }
    }, [userId, dispatch]);

    const handleUpdateRequest = async(reqId: string, value: string) => {
        const data = {status: value};
        await updateRequestThunk(reqId, data);
        if (userId){
            dispatch(getRequestVehicleThunk(userId));
        }
    };

    return (
        <Container>
            {
                Object.keys(detail_request).length !== 0 ? (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5 }}>
                            <Avatar sx={{ width: 120, height: 120 }} />
                            <Box sx={{ display: 'flex', gap: 20 }}>
                                <div>
                                    <Typography sx={{ fontSize: 20 }}><strong>Nombres: </strong> {detail_request?.User?.firstName}</Typography>
                                    <Typography sx={{ fontSize: 20 }}><strong>Apellidos: </strong> {detail_request?.User?.lastName}</Typography>
                                    <Typography sx={{ fontSize: 20 }}><strong>Tipo de documento: </strong> {detail_request?.User?.documentType}</Typography>
                                    <Typography sx={{ fontSize: 20 }}><strong>Numero de documento: </strong> {detail_request?.User?.numberDocument}</Typography>
                                </div>
                                <div>
                                    <Typography sx={{ fontSize: 20 }}><strong>Numero de celular:</strong> {detail_request?.User?.phoneNumber}</Typography>
                                    <Typography sx={{ fontSize: 20 }}><strong>Email:</strong> {detail_request?.User?.email}</Typography>
                                    <Typography sx={{ fontSize: 20 }}><strong>Role:</strong> {detail_request?.User?.rol}</Typography>
                                </div>
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{ mt: 5 }}>
                            <Typography variant='h4' sx={{ textAlign: 'center' }}>Datos del vehículo</Typography>
                            <Box sx={{ display: 'flex', py: 5, justifyContent: 'space-around' }}>
                                <Box >
                                    <Typography sx={{ fontSize: 20 }}><strong>Marca:</strong> {detail_request?.Vehicle?.brand}</Typography>
                                    <Typography sx={{ fontSize: 20 }}><strong>Modelo:</strong> {detail_request?.Vehicle?.model}</Typography>
                                    <Typography sx={{ fontSize: 20 }}><strong>Placa del vehículo:</strong> {detail_request?.Vehicle?.carPlate}</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 20 }}><strong>Color:</strong> {detail_request?.Vehicle?.color}</Typography>
                                    <Typography sx={{ fontSize: 20 }}><strong>Cilindraje:</strong> {detail_request?.Vehicle?.cylinderCapacity}.0</Typography>
                                </Box>
                            </Box>

                            <ImageList>
                                {
                                    detail_request?.Vehicle?.images.map((img: string) => (
                                        <ImageListItem sx={{ border: 2 }}>
                                            <ImageZoom src={img} zoom="200" />
                                        </ImageListItem>
                                    ))
                                }
                            </ImageList>
                        </Box>
                        {
                            detail_request?.status === 'Pending' && (
                                <Box sx={{ display: 'flex', gap: 2, my: 10 }}>
                                    <CustomButton
                                        color='secondary'
                                        sx={{ width: '50%' }}
                                        variant='contained'
                                        textValue='Aceptar Solicitud'
                                        onClick={() => handleUpdateRequest(detail_request?.request_id, 'Accepted')}
                                    />
                                    <CustomButton
                                        color='secondary'
                                        sx={{ width: '50%' }}
                                        variant='contained'
                                        textValue='Rechazar Solicitud'
                                        onClick={() => handleUpdateRequest(detail_request?.request_id, 'Refused')}
                                    />
                                </Box>
                            )
                        }
                    </>
                ):<Typography>Sin resultados</Typography>
            }
        </Container>
    );
};

export {DetailRequestUser};
