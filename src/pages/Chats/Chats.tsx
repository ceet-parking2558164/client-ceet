import {SyntheticEvent, useEffect, useState} from 'react';
import {Box, Container, Tab, Tabs, Typography} from '@mui/material';
import {Mail} from '@mui/icons-material';
import {CustomTabPanel} from '../../common/molecules/CustomTabPanel/CustomTabPanel.tsx';
import {CardChat} from '../../components/CardChat/CardChat.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';
import {getAllChatThunk} from '../../redux/actions/chat/chatThunk.ts';
import {FormSendMessage} from '../../components/FormSendMessage/FormSendMessage.tsx';

const Chats = () => {

    const dispatch = useAppDispatch();

    const {chats} = useAppSelector(state => state.chats);

    const {user} = useAppSelector(state => state.auth);

    const [value, setValue] = useState<number>(0);
    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getAllChatThunk());
    }, [dispatch]);

    return (
        <Container>
            <Box>
                <Mail/>
                <Typography>Mensajes</Typography>
            </Box>
            <Box>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Recibidos" value={0} sx={{fontWeight: 'bold'}}/>
                        <Tab label="Enviados" value={1} sx={{fontWeight: 'bold'}}/>
                        <Tab label="Envia una nueva notificacion" value={2} sx={{fontWeight: 'bold'}}/>
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {
                        chats.map(chat => (
                            <div key={chat.chat_id} style={{width: '100%', border: 1, backgroundColor: 'rgba(239,239,239,0.85)'}}>
                                {
                                    user?.rol === 'Administrador' && (
                                        <CardChat
                                            userId={chat.userId}
                                            chat_id={chat.chat_id}
                                            createdAt={chat.createdAt}
                                        />
                                    )
                                }
                            </div>
                        ))
                    }
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    hola 2
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <FormSendMessage />
                </CustomTabPanel>
            </Box>
        </Container>
    );
};

export {Chats};
