import { useCallback, useEffect } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Mail } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux/useAppRedux.ts';
import { getMessagesThunk } from '../../../redux/actions/message/MessageThunk.ts';
import { CustomInput } from '../../../common/atoms/CustomInput.tsx';
import { CustomButton } from '../../../common/atoms/CustomButton.tsx';
import { routesAdmin, routesGlobals } from '../../../utils/constants/routes.ts';
import { MessageService } from '../../../services/message/Message.service.ts';
import { useFormRegister } from '../../../hooks/useFormRegister/useFormRegister.ts';
import { FieldValues } from 'react-hook-form';
import { socket } from '../../../utils/socket/socket.ts';
import { addMessage } from '../../../redux/reducer/message.slice.ts';
import { Message as MessageType} from '../../../types/pages/Message/Message.ts';

const messageService = new MessageService();

const Message = () => {

    const { chatId } = useParams();

    const dispatch = useAppDispatch();

    const { messages, usersInChat } = useAppSelector(state => state.messages);
    const { user } = useAppSelector(state => state.auth);
    
    const {
        register,
        reset,
        handleSubmit
    } = useFormRegister();

    useEffect(() => {
        if (chatId) {
            dispatch(getMessagesThunk(chatId));        
        }  
    }, [chatId, dispatch]);
    
    useEffect(() => {
        if(chatId)messageService.updateMessage(chatId);
    },[chatId]);

    const handleSendMessage = async(data: FieldValues) => {
        const dataMessage = {
            chat_id: chatId,
            user_id: usersInChat?.adminId.user_id,
            message: data.message,
            type: 'Mensaje'
        };
        
        await messageService.sendMessage(dataMessage);
        reset();
    
    };
    const dispatchCallback = useCallback((data: MessageType) => {
        dispatch(addMessage(data));
    }, [dispatch]);

   useEffect(() => {
        if(chatId){
            socket?.emit('subscribe', chatId);
            socket?.on('message-text', dispatchCallback);
        }
    },[chatId, dispatch, dispatchCallback]);

    return (
        <>
            <Box sx={{ py: 2 }}>
                <Mail />
                <Typography>Mensajes</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1 }}>
                <Avatar />
                {
                    usersInChat?.admin_id === user?.user_id ?
                        <Typography>{`${usersInChat?.userId?.firstName} ${usersInChat?.userId?.lastName}`}</Typography> : usersInChat?.admin_id !== user?.user_id && (
                            <Typography>{`${usersInChat?.adminId?.firstName} ${usersInChat?.adminId?.lastName}`}</Typography>
                        )

                }
            </Box>
            {
                messages.map(msg => (
                    <Box key={msg.message_id} sx={{ p: 1, bgcolor: 'rgb(239,239,239)', my: 2, flexDirection: 'row-reverse' }}>
                        <Typography sx={{ textAlign: 'right' }}>{msg?.createdAt.slice(15, 19)}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <Typography>{msg.message}</Typography>
                            {
                                msg.type === 'Registro' && user?.rol === 'Administrador' && (
                                    <Link to={`${routesGlobals.ROOT}/admin${routesAdmin.REQUEST}/${usersInChat?.userId.user_id}`}>
                                        <CustomButton textValue='Ver solicitud' />
                                    </Link>
                                )
                            }
                        </Box>
                    </Box>
                ))
            } 

            <Box sx={{ p: 2, display: 'flex' }}>
                <form style={{ width: '100%', border: 2 }} onSubmit={handleSubmit(handleSendMessage)}>
                    <CustomInput
                        type='text'
                        sx={{ width: '90%' }}
                        multiline rows={2}
                        form={register('message', { required: true })}
                    />
                    <CustomButton sx={{ height: 70 }} textValue='Responder' variant='contained' type='submit' />
                </form>
            </Box>
        </>
    );
};

export { Message };

/* useEffect(() => {
    (async () => {
        if (chatId) {
            await messageService.updateMessage(chatId);
        }
    })();
}, [chatId, dispatch]); */