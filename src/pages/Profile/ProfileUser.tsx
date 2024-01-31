import {Avatar, Box, Container, Typography} from '@mui/material';
import {Edit} from '@mui/icons-material';
import {CameraAlt} from '@mui/icons-material';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {stylesForm, styleSx} from './ProfileUser.styles.ts';
import {useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';
import {useActionUser} from '../../hooks/useUser/useActionUser.ts';
import {useFormRegister} from '../../hooks/useFormRegister/useFormRegister.ts';

const ProfileUser = () => {

    const {user} = useAppSelector(state => state.auth);
    const {register, handleSubmit} = useFormRegister();

    const {
        imageUrl,
        fileInputRef,
        openFileDialog,
        handlePhotoUser,
        handleUpdateUser
    } = useActionUser();


    return (
        <Container sx={{mt: 10}}>
            <form style={stylesForm} onSubmit={handleSubmit(handleUpdateUser)}>
                <Typography variant='h3' sx={styleSx.title}>Perfil</Typography>
                <Box sx={styleSx.boxAvatar}>
                    <Avatar sx={{ width: 200, height: 200 }}
                            alt="img-profile"
                            src={imageUrl ? imageUrl: (user && user.imageProfile ? user.imageProfile: '')}
                    />
                    <CameraAlt
                        sx={styleSx.iconCamera}
                        onClick={openFileDialog}
                    />
                    <input
                        type='file'
                        ref={fileInputRef}
                        style={{display: 'none'}}
                        onChange={handlePhotoUser}
                    />
                </Box>
                <Box sx={styleSx.boxInputs}>
                    <Box sx={styleSx.boxInputPar}>
                        <Box  sx={styleSx.boxInput}>
                            <CustomInput
                                sx={{width: '100%'}}
                                label='Nombres'
                                defaultValue={user?.firstName}
                                form={register('firstName')}
                            />
                            <Edit
                                sx={styleSx.iconEdit}
                            />
                        </Box>
                        <Box sx={styleSx.boxInput}>
                            <CustomInput
                                sx={{width: '100%'}}
                                label='Apellidos'
                                defaultValue={user?.lastName}
                                form={register('lastName')}
                            />
                            <Edit
                                sx={styleSx.iconEdit}
                            />
                        </Box>
                    </Box>
                    <Box sx={styleSx.boxInputPar}>
                        <Box sx={styleSx.boxInput}>
                            <CustomInput
                                sx={{width: '100%'}}
                                label='Celular'
                                defaultValue={user?.phoneNumber}
                                form={register('phoneNumber')}
                            />
                            <Edit
                                sx={styleSx.iconEdit}
                            />
                        </Box>
                        <Box sx={styleSx.boxInput}>
                            <CustomInput
                                sx={{width: '100%'}}
                                label='Email'
                                defaultValue={user?.email}
                                form={register('email')}
                            />
                            <Edit
                                sx={styleSx.iconEdit}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <CustomButton
                        type='submit'
                        sx={{mt: 2, width: '50%'}}
                        textValue='Guardar'
                        variant='contained'
                    />
                </Box>
            </form>
        </Container>
    );
};

export {ProfileUser};
