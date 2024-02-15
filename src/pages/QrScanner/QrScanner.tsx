import { useState } from 'react';
import QrReader from 'react-qr-scanner';

const QrScanner = () => {
  const [result, setResult] = useState('No hay resultado');
  const [isCameraOn, setIsCameraOn] = useState<boolean>(true);

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
    height: 240,
    width: 320,
  };

  console.log(result);

  return (
    <>
      {isCameraOn && (
        <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
      )}
    </>
  );
};

export { QrScanner };
