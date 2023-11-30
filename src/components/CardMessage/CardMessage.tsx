import {Avatar, Box, Typography} from '@mui/material';
import {Delete} from '@mui/icons-material';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';

const CardMessage = () => {
    return (
        <Box sx={{border: 1, borderRadius: 2, display: 'flex', justifyContent: 'space-between', p: 3}}>
            <Box sx={{width: 130, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Avatar sx={{width: 76, height: 76}}/>
            </Box>
            <Box sx={{width: '100%', px: 3}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography>Jorge Andres Vega Español</Typography>
                    <Typography>Asunto: Registro</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', my: 2}}>
                    <CustomInput disabled sx={{width: '80%', cursor: 'not-allowed'}} multiline rows={2}
                    />
                    <CustomButton textValue='Ver solicitud'/>
                </Box>
                <Typography>2023-08-25</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CustomItemIcon Icon={Delete} sx={{cursor: 'pointer'}}/>
            </Box>
        </Box>
    );
};

export {CardMessage};
