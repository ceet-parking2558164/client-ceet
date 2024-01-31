import {useEffect} from 'react';
import {Avatar, Box, Typography} from '@mui/material';
import {Mail} from '@mui/icons-material';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';
import {getMessagesThunk} from '../../redux/actions/message/MessageThunk.ts';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';
import {routesAdmin, routesGlobals} from '../../utils/constants/routes.ts';

const Message = () => {

    const {chatId} = useParams();

    const dispatch = useAppDispatch();

    const {messages} = useAppSelector(state => state.messages);


    useEffect(() => {
        if (chatId){
            dispatch(getMessagesThunk(chatId));
        }
    }, [chatId, dispatch]);

    return (
        <>
            <Box sx={{py:2}}>
                <Mail/>
                <Typography>Mensajes</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap:2, py: 1}}>
                <Avatar />
                <Typography>Andres Vega</Typography>
            </Box>
            {
                messages.map(msg => (
                    <Box key={msg.message_id} sx={{ p:1, bgcolor: 'rgb(239,239,239)', my:2, flexDirection: 'row-reverse'}}>
                        <Typography sx={{textAlign: 'right'}}>{msg.createdAt.slice(15,19)}</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'space-between',width: '100%', alignItems: 'center'}}>
                            <Typography>{msg.message}</Typography>
                            {
                                msg.type === 'Registro' && (
                                    <Link to={`${routesGlobals.ROOT}/admin${routesAdmin.REQUEST}/${msg.user_id}`}>
                                        <CustomButton textValue='Ver solicitud' />
                                    </Link>
                                )
                            }
                        </Box>
                    </Box>
                ))
            }

            <Box sx={{p:2, display: 'flex'}}>
                <CustomInput
                    type='text'
                    sx={{width: '90%'}}
                    multiline rows={2}
                />
                <CustomButton textValue='Responder' variant='contained'/>
            </Box>
        </>
    );
};

export {Message};
