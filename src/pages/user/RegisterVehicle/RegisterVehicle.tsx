import {ChangeEvent, useEffect} from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import {CustomInput} from '../../../common/atoms/CustomInput.tsx';
import {CardImageVehicle} from '../../../components/CardImageVehicle/CardImageVehicle.tsx';
import {useFormRegister} from '../../../hooks/useFormRegister/useFormRegister.ts';
import { CustomSelect } from '../../../common/atoms/CustomSelect.tsx';
import {useActionVehicle} from '../../../hooks/useVehicle/useActionVehicle.ts';
import {validateFormVehicle, optionErrorsForm} from './validateForm.ts';
import {ModalError} from '../../../components/ModalError/ModalError.tsx';
import {ListOptionsVehicles} from '../../../types/utils/constants/ListOptionsVehicles.ts';
import {styleSx} from './RegisterVehicle.styles.ts';
import {LoadingButton} from '@mui/lab';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux/useAppRedux.ts';
import { getAllTypesVehiclesThunk } from '../../../redux/actions/typtVehicle/typeVehicle.thunk.ts';

const RegisterVehicle = () => {

    const dispatch = useAppDispatch();
    const {typesVehicles} = useAppSelector(state => state.typeVehicles);

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
        idTypeVehicle = typesVehicles.find(type => type.nameType === typeVehicle_id);
    }

    const {selectImage, handleSendForm, handleFile, loading} = useActionVehicle(idTypeVehicle, reset);

    useEffect(() => {
        dispatch(getAllTypesVehiclesThunk());
    },[dispatch]);

    return (
       <>
           <Container sx={{mb:10}}>
               <Typography variant='h4' sx={{textAlign: 'center', p: 2}}>Ingresa los datos del vehiculo</Typography>
               <form onSubmit={handleSubmit(handleSendForm)}>
                   <CustomSelect
                       label='Tipo de vehiculo'
                       value={typeVehicle_id ? typeVehicle_id: ''}
                       options={typesVehicles.map(tv => tv.nameType)}
                       form={register('typeVehicle_id')}
                   />
                   <Box sx={styleSx.boxDynamic}>
                       <Box sx={{width: {lg: '50%', md:'50%', xs: '100%'}}}>
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
                        <Box sx={{ width: { lg: '50%', md: '50%', xs: '100%' }}}>
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
                    <Grid container spacing={2}  sx={{ mt: 2, display: 'flex', width: '100%'}}>
                       {
                           selectImage.map(item => (
                               <Grid item lg={6} md={6} xs={12} key={item.id} sx={{ width: '50%'}}>
                                   <CardImageVehicle
                                       id={item.id}
                                       description={item.description}
                                       handleFile={(e: ChangeEvent<HTMLInputElement>) => handleFile(e, item.id)}
                                       image={item.image}
                                       type={!typeVehicle_id}
                                   />
                               </Grid>
                           ))
                       }
                   </Grid>
                   <CustomInput
                       label="Observaciones"
                       multiline rows={4}
                       disabled={!typeVehicle_id}
                       sx={{width: '100%', mt: 2}}
                   />
                   <LoadingButton
                       variant='contained'
                       sx={styleSx.buttonCustom}
                       disabled={!typeVehicle_id}
                       type='submit'
                       loading={loading}
                   >
                       <span>Enviar solicitud</span>
                   </LoadingButton>
               </form>
               <Box sx={{display: 'flex', justifyContent: 'center'}}>
                   <ModalError  formValidate={optionsErrors} />
               </Box>
           </Container>
       </>
    );
};

export {RegisterVehicle};
