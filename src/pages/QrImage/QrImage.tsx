import {Box, Container, Typography} from '@mui/material';
import {DownloadForOffline} from '@mui/icons-material';
import {CustomIcon} from '../../common/atoms/CustomIcon.tsx';
import {styleSx} from './QrImage.styles.ts';
import {QrServiceUser} from '../../services/qrUser/QrUser.service.ts';
import {useEffect, useState} from 'react';
import {useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';

const qrServiceUser = new QrServiceUser();
const QrImage = () => {
    const {user} = useAppSelector(state => state.auth);
    const [imageQr, setImageQr] = useState<string | null>(null);

    useEffect(() => {
        (async() => {
            if (user?.user_id){
                const response = await qrServiceUser.getQrUserById(user.user_id);
                console.log(response.data.qrCode.length);
                setImageQr(response.data.qrCode);

            }
        })();
    }, [user?.user_id]);

    const handleDownload = () => {
        if (imageQr) {
            const link = document.createElement('a');
            link.download = 'codigo-qr.png';
            link.href = imageQr;
            document.body.appendChild(link);
            link.click();
        }
    };

    return (
        <Container sx={styleSx.containerMain}>
            <Typography variant='h3'>Descarga tu Qr</Typography>
            {
                imageQr ?
                    <>
                        <Box>
                            <img src={imageQr} alt="qr-image"/>
                        </Box>
                        <CustomIcon onClick={handleDownload} Icon={DownloadForOffline} sxStyles={{width: '50px', height: '50px'}}/>
                    </>
                    : <Typography variant='h5'>No tienes ningun codigo QR</Typography>
            }

        </Container>
    );
};

export {QrImage};
