import {FC} from 'react';
import {Avatar, Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {Delete} from '@mui/icons-material';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {ComponentListChat} from '../../types/redux/initialStateChat.ts';
import {routesGlobals} from '../../utils/constants/routes.ts';
import {deleteChatThunk} from '../../redux/actions/chat/chatThunk.ts';
import {useAppDispatch} from '../../hooks/useRedux/useAppRedux.ts';


const CardChat:FC<ComponentListChat> = (props) => {
    
    const dispatch = useAppDispatch();

    const hadnleDeleteChat = (id:string) => {
        dispatch(deleteChatThunk(id));
    };

    return (
        <Box  sx={{border: 1, borderRadius: 2, display: 'flex', justifyContent: 'space-between', p: 2, my:1,alignItems: 'center'}}>
            <Link
                to={`${routesGlobals.ROOT}/${routesGlobals.MESSAGE}/${props.chat_id}`}
                style={{textDecoration: 'none', color: 'black'}}
            >
                <Box sx={{width: 130, display: 'flex', justifyContent: 'center'}}>
                    <Avatar sx={{width: 76, height: 76}} src={props.imageProfile ? props.imageProfile: ''}/>
                </Box>
            </Link>
            <Box sx={{width: '100%', px: 2}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography>{`${props.firstName} ${props.lastName}`}</Typography>
                    <Typography>{props.createdAt.slice(15, 19)}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', my: 2}}>
                    <CustomInput
                        disabled
                        sx={{width: '100%', cursor: 'not-allowed'}}
                        defaultValue='Ultimo mensaje'
                        multiline rows={1}
                    />
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50}}>
                <CustomItemIcon Icon={Delete} sx={{cursor: 'pointer'}} onClick={() => hadnleDeleteChat(props.chat_id)}/>
            </Box>
        </Box>
    );
};

export {CardChat};
