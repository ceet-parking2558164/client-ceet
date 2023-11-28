import {Box, Container, Typography} from '@mui/material';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {styleSx} from './RegisterVehicle.styles.ts';
import {ChangeEvent} from 'react';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {CardImageVehicle} from '../../components/CardImageVehicle/CardImageVehicle.tsx';
import {useFormRegister} from '../../hooks/useFormRegister/useFormRegister.ts';
import { CustomSelect } from '../../common/atoms/CustomSelect.tsx';
import {useActionVehicle} from '../../hooks/useVehicle/useActionVehicle.ts';
import {optionsVehicles} from '../../utils/constants/listOptionsVehicles.ts';
import {validateFormVehicle, optionErrorsForm} from './validateForm.ts';
import {ModalError} from '../../components/ModalError/ModalError.tsx';
import {ListOptionsVehicles} from '../../types/utils/constants/ListOptionsVehicles.ts';

const RegisterVehicle = () => {


    const {
        register,
        handleSubmit,
        watch,
        errors,
        reset
    } = useFormRegister();

    const {typeVehicle_id} = watch();

    const optionsErrors = validateFormVehicle(errors);

    let idTypeVehicle:ListOptionsVehicles|undefined;

    if (typeVehicle_id){
        idTypeVehicle = optionsVehicles.find(type => type.type === typeVehicle_id);
    }

    const {selectImage, handleSendForm, handleFile} = useActionVehicle(idTypeVehicle, reset);


    return (
        <Container>
            <Typography variant='h4' sx={{textAlign: 'center', p: 2}}>Ingresa los datos del vehiculo</Typography>
            <form onSubmit={handleSubmit(handleSendForm)}>
                <CustomSelect
                    label='Tipo de vehiculo'
                    value={typeVehicle_id ? typeVehicle_id: ''}
                    options={[optionsVehicles[0].type, optionsVehicles[1].type, optionsVehicles[2].type]}
                    form={register('typeVehicle_id')}
                />
                <Box sx={styleSx.boxDynamic}>
                    <Box sx={{width: '50%'}}>
                        {
                            typeVehicle_id === 'Bicicleta' ? (
                                <>
                                    <CustomInput
                                        sx={styleSx.inputCustom}
                                        label='Tipo de bibleta'
                                        form={register('typeBicycle', optionErrorsForm.optTypeBicycle)}
                                    />
                                    <CustomInput
                                        label='Serial del marco'
                                        sx={styleSx.inputCustom}
                                        form={register('serial', optionErrorsForm.optSerial)}
                                    />
                                </>
                            ) : (
                                <>
                                    <CustomInput
                                        sx={styleSx.inputCustom}
                                        label='Cilindraje'
                                        disabled={!typeVehicle_id}
                                        form={register('cylinderCapacity', optionErrorsForm.optCylinderCapacity)}
                                    />
                                    <CustomInput
                                        sx={styleSx.inputCustom}
                                        label='Place del Vehiculo'
                                        disabled={!typeVehicle_id}
                                        form={register('carPlate', optionErrorsForm.optCarPlate)}
                                    />
                                    <CustomInput
                                        sx={styleSx.inputCustom}
                                        label='Modelo'
                                        disabled={!typeVehicle_id}
                                        form={register('model', optionErrorsForm.optModel)}
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
                                disabled={!typeVehicle_id}
                                form={register('brand', optionErrorsForm.optBrand)}
                            />
                            <CustomInput
                                sx={styleSx.inputCustom}
                                label='Color'
                                disabled={!typeVehicle_id}
                                form={register('color', optionErrorsForm.optColor)}
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
                                    type={!typeVehicle_id}
                                />
                            </Box>
                        ))
                    }
                </Box>
                <CustomInput
                    label="Observaciones"
                    multiline rows={4}
                    disabled={!typeVehicle_id}
                    sx={{width: '100%', mt: 2}}
                />
                <CustomButton
                    variant='contained'
                    sx={styleSx.buttonCustom}
                    disabled={!typeVehicle_id}
                    textValue='Enviar solicitud'
                    type='submit'
                />
            </form>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <ModalError  formValidate={optionsErrors} />
            </Box>
        </Container>
    );
};

export {RegisterVehicle};
