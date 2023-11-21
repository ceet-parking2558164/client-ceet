import {Avatar, Box, Container, Typography} from '@mui/material';
import {Edit} from '@mui/icons-material';
import {CameraAlt} from '@mui/icons-material';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {stylesForm, styleSx} from './ProfileUser.styles.ts';
import {useAppSelector} from '../../hooks/useAppRedux.ts';
import {useActionUser} from '../../hooks/useActionUser.ts';

const ProfileUser = () => {
    const {user} = useAppSelector(state => state.auth);

    const {
        imageUrl,
        fileInputRef,
        stateEdit,
        handleEdit,
        openFileDialog,
        handlePhotoUser
    } = useActionUser();
    return (
        <Container sx={{mt: 10}}>
            <form style={stylesForm}>
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
                                disabled={stateEdit !== 1}
                                defaultValue={user?.firstName}
                            />
                            <Edit
                                sx={styleSx.iconEdit}
                                onClick={() => handleEdit(1)}
                            />
                        </Box>
                        <Box sx={styleSx.boxInput}>
                            <CustomInput
                                sx={{width: '100%'}}
                                label='Apellidos'
                                disabled={stateEdit !== 2}
                                defaultValue={user?.lastName}
                            />
                            <Edit
                                sx={styleSx.iconEdit}
                                onClick={() =>handleEdit(2)}
                            />
                        </Box>
                    </Box>
                    <Box sx={styleSx.boxInputPar}>
                        <Box sx={styleSx.boxInput}>
                            <CustomInput
                                sx={{width: '100%'}}
                                label='Celular'
                                disabled={stateEdit !== 3}
                                defaultValue={user?.phoneNumber}
                            />
                            <Edit
                                sx={styleSx.iconEdit}
                                onClick={() =>handleEdit(3)}
                            />
                        </Box>
                        <Box sx={styleSx.boxInput}>
                            <CustomInput
                                sx={{width: '100%'}}
                                label='Email'
                                disabled={stateEdit !== 4}
                                defaultValue={user?.email}
                            />
                            <Edit
                                sx={styleSx.iconEdit}
                                onClick={() =>handleEdit(4)}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <CustomButton sx={{mt: 2, width: '50%'}} textValue='Guardar' variant='contained'/>
                </Box>
            </form>

        </Container>
    );
};

export {ProfileUser};
