import {Container, Typography, Box, Tabs, Tab} from "@mui/material";
import { Mail } from '@mui/icons-material';
import {SyntheticEvent, useState} from "react";
import {CustomTabPanel} from "../../common/molecules/CustomTabPanel/CustomTabPanel.tsx";
const Messages = () => {
    const [value, setValue] = useState<number>(0);
    const handleChange = (_event:SyntheticEvent, newValue:number) => {
        setValue(newValue);
    };
    return (
        <Container sx={{mt:3, p: 3}}>
            <Box>
                <Mail />
                <Typography>Mensajes</Typography>
            </Box>
            <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} >
                        <Tab label="Recibidos" value={0} sx={{fontWeight: 'bold'}} />
                        <Tab label="Enviados" value={1} sx={{fontWeight: 'bold'}}/>
                        <Tab label="Envia una nueva notificacion" value={2} sx={{fontWeight: 'bold'}} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    hola 1
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
