import {Box, Container, Typography} from "@mui/material";
import {DownloadForOffline} from "@mui/icons-material";
import {CustomIcon} from "../../atoms/CustomIcon.tsx";
import {styleSx} from "./QrImage.styles.ts";
import QR from '../../../assets/qrDefect.svg';
const QrImage = () => {
    return (
        <Container sx={styleSx.containerMain}>
            <Typography variant='h3'>Descarga tu Qr</Typography>
            <Box>
                <img src={QR} alt="image qr"/>
            </Box>
            <CustomIcon Icon={DownloadForOffline} sxStyles={{width: '50px', height: '50px'}} />
        </Container>
    );
};

export {QrImage};
