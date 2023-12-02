import {SyntheticEvent, useEffect, useState} from 'react';
import {Box, Container, Tab, Tabs, Typography} from '@mui/material';
import {Mail} from '@mui/icons-material';
import {CustomTabPanel} from '../../common/molecules/CustomTabPanel/CustomTabPanel.tsx';
import {CardMessage} from '../../components/CardMessage/CardMessage.tsx';
import {getMessagesThunk} from '../../redux/actions/message/MessageThunk.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';

const Messages = () => {

    const dispatch = useAppDispatch();

    const {message} = useAppSelector(state => state.messages);

    const {user} = useAppSelector(state => state.auth);

    const [value, setValue] = useState<number>(0);
    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getMessagesThunk());
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
                        message.map(msg => (
                            <>
                                {
                                    user?.rol === 'Administrador' && msg.type === 'Registro' && (
                                        <CardMessage
                                            key={msg.message_id}
                                            User={msg.User}
                                            type={msg.type}
                                            message={msg.message}
                                            createdAt={msg.createdAt}
                                        />
                                    )
                                }
                            </>
                        ))
                    }
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    hola 2
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    hola 3
                </CustomTabPanel>
            </Box>
        </Container>
    );
};

export {Messages};
