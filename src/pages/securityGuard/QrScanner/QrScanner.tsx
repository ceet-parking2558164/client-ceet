import { Box, Typography } from '@mui/material';

import { useState } from 'react';
import { CustomButton } from '../../../common/atoms/CustomButton';
import { QrCodeScanner, CameraAlt } from '@mui/icons-material';
import QrReader from 'react-qr-scanner';
import { CardVehicleQr } from '../../../components/CardVehicleQr/CardVehicleQr';


interface Prueba {
  vehicle_id?: string,
  model: string,
  carPlate: string,
  color: string,
  firstName: string,
  lastName: string,
  imageProfile: string,
}

const QrScanner = () => {
  const [result, setResult] = useState<Prueba | null>(null);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);

  const handleScan = (result: { text: string }) => {
    if (result) {
      const qrObject = JSON.parse(result?.text);
      setResult(qrObject);
      setIsCameraOn(false);
    }
  };


  const handleError = (err: Error) => {
    console.error(err);
  };

  const previewStyle = {
    height: '100%',
    width: '100%',
  };

  const handleOpenCamera = () => {
    setIsCameraOn(!isCameraOn);
  };

  const constraints = {
    video: { facingMode: 'environment' }
  };

  

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, mt: 3 }}>
        <Box sx={{ width: {lg: '35%', md: '45%', xs: '100%'}, minHeight: 400, border: 1 }}>

          {
            isCameraOn ?
              (
                <QrReader
                  constraints={constraints}
                  delay={100}
                  style={previewStyle}
                  onError={handleError}
                  onScan={handleScan}
                />
              ) :
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <CameraAlt sx={{ fontSize: 50, opacity: 0.5 }} />
              </Box>
          }
        </Box>
        <CustomButton
          variant='contained'
          sx={{ width: { lg: '35%', md: '45%', xs: '100%' } }}
          size='large'
          textValue='Scanear Codigo'
          startIcon={<QrCodeScanner />}
          onClick={handleOpenCamera}
        />
      </Box>
      {
        result ?
          <CardVehicleQr
            carPlate={result.carPlate}
            color={result.color}
            firstName={result.firstName}
            imageProfile={result.imageProfile}
            model={result.model}
            lastName={result.lastName}
          /> : <Typography variant='h4'>Sin resultados</Typography>
      }
    </>
  );
};

export { QrScanner };