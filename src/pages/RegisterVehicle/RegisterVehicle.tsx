import {Box, Container, Typography} from '@mui/material';
import {CustomSelect} from '../../common/atoms/CustomSelect.tsx';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {styleSx} from './RegisterVehicle.styles.ts';
import {ChangeEvent, useState} from 'react';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {ListItemCard} from '../../types/constans/ListItemCard.ts';
import {itemsCardImage} from '../../utils/constants/listItemsCard.ts';
import {CardImageVehicle} from '../../components/CardImageVehicle/CardImageVehicle.tsx';


const state = ['Bicicleta', 'Carro', 'Motocicleta'];

const RegisterVehicle = () => {

    const [selectImage, setSelectImage] = useState<ListItemCard[]>(itemsCardImage);
    const [imagesFormData, setImagesFormData] = useState<File[]>([]);

    const handleFile = (event: ChangeEvent<HTMLInputElement>, id: number) => {
        if (event.target.files) {
            const imgSelect = event.target.files[0];
            setImagesFormData((prevState) => [...prevState, imgSelect]);
            if (imgSelect) {
                const imageUrl: string = URL.createObjectURL(imgSelect);
                const updateItems = selectImage.map(item => {
                    if (item.id === id) return {...item, image: imageUrl};
                    return item;
                });
                setSelectImage(updateItems);
            }
        }
    };

    const handleSendForm = () => {
        console.log(imagesFormData);
    };

    return (
        <Container>
            <Typography variant='h4' sx={{textAlign: 'center', p: 2}}>Ingresa los datos del vehiculo</Typography>
            <form onSubmit={handleSendForm}>
                <CustomSelect
                    label='Tipo de vehiculo'
                    options={['Bicicleta', 'Carro', 'Motocicleta']} valueSelect={''}
                />
                <Box sx={styleSx.boxDynamic}>
                    <Box sx={{width: '50%'}}>
                        {
                            state[0] === 'Bicicleta' ? (
                                <>
                                    <CustomInput
                                        sx={styleSx.inputCustom}
                                        label='Tipo de bibleta'
                                    />
                                    <CustomInput
                                        label='Serial del marco'
                                        sx={styleSx.inputCustom}
                                    />
                                </>
                            ) : (
                                <>
                                    <CustomInput
                                        sx={styleSx.inputCustom}
                                        label='Cilindraje'
                                    />
                                    <CustomInput
                                        sx={styleSx.inputCustom}
                                        label='Plade del Vehiculo'
                                    />
                                    <CustomInput
                                        sx={styleSx.inputCustom}
                                        label='Modelo'
                                    />
                                </>
                            )
                        }
                    </Box>
                    <Box sx={{width: '50%'}}>
                        <>
                            <CustomInput
                                sx={styleSx.inputCustom}
                                label='Marca'
                            />
                            <CustomInput
                                sx={styleSx.inputCustom}
                                label='Color'
                            />
                        </>
                    </Box>
                </Box>
                <Box sx={{mt: 2, display: 'flex', width: '100%', gap: 2}}>
                    {
                        selectImage.map(item => (
                            <Box key={item.id} sx={{width: '25%'}}>
                                <CardImageVehicle
                                    id={item.id}
                                    description={item.description}
                                    handleFile={(e: ChangeEvent<HTMLInputElement>) => handleFile(e, item.id)}
                                    image={item.image}
                                />
                            </Box>
                        ))
                    }
                </Box>
                <CustomInput
                    label="Observaciones"
                    multiline rows={4}
                    sx={{width: '100%', mt: 2}}
                />
                <CustomButton
                    variant='contained'
                    sx={styleSx.buttonCustom}
                    textValue='Enviar solicitud'
                />
            </form>
        </Container>
    );
};

export {RegisterVehicle};
