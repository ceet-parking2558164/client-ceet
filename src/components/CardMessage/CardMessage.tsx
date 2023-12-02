import {FC} from 'react';
import {Avatar, Box, Typography} from '@mui/material';
import {Delete} from '@mui/icons-material';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {MessageUser} from '../../types/pages/Message/Message.ts';

const CardMessage:FC<MessageUser> = (props) => {
    return (
        <Box sx={{border: 1, borderRadius: 2, display: 'flex', justifyContent: 'space-between', p: 3, my:1}}>
            <Box sx={{width: 130, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Avatar sx={{width: 76, height: 76}} src={props.User.imageProfile ? props.User.imageProfile: ''}/>
            </Box>
            <Box sx={{width: '100%', px: 3}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography>{`${props.User.firstName} ${props.User.lastName}`}</Typography>
                    <Typography>Asunto:  {props.type}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', my: 2}}>
                    <CustomInput
                        disabled
                        sx={{width: '80%', cursor: 'not-allowed'}}
                        defaultValue={props.message}
                        multiline rows={2}
                    />
                    <CustomButton textValue='Ver solicitud'/>
                </Box>
                <Typography>{props.createdAt}</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CustomItemIcon Icon={Delete} sx={{cursor: 'pointer'}}/>
            </Box>
        </Box>
    );
};

export {CardMessage};
