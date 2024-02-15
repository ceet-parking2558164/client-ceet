import { Box, Typography } from '@mui/material';
import { CustomButton } from '../../common/atoms/CustomButton.tsx';
import { FC } from 'react';
import { CardRequest as CardRequestProps } from '../../types/components/CardRequest.ts';
import logoSena from '../../assets/icono-sena.svg';
const CardRequest: FC<CardRequestProps> = ({
  imgUser,
  status,
  numberReq,
  fullName,
}) => {
  return (
    <Box
      sx={{
        width: '50%',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        borderRadius: 3,
      }}
    >
      <Box sx={{ display: 'flex', p: 2, justifyContent: 'space-between' }}>
        <Box sx={{ width: '25%' }}>
          <img
            style={{ width: '100%', borderRadius: 10 }}
            src={imgUser ? imgUser : logoSena}
            alt="Imagen del solitante"
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant="h6">
            Solicitud No:
            <span style={{ fontWeight: 700 }}> {numberReq.slice(0, 7)}</span>
          </Typography>
          <Typography variant="h6">
            Nombre:
            <span style={{ fontWeight: 700 }}> {fullName}</span>
          </Typography>
          <Typography variant="h6">
            Estado de solicitud:
            <span
              style={{
                fontWeight: 700,
                color: `${
                  status === 'Pending'
                    ? '#ea0b0b'
                    : status === 'Refused'
                    ? '#fabf00'
                    : '#2b9420'
                }`,
              }}
            >
              {status === 'Pending'
                ? ' Pendiente'
                : status === 'Refused'
                ? ' Rechazada'
                : ' Aceptada'}
            </span>
          </Typography>
        </Box>
      </Box>
      <CustomButton sx={{ width: '100%', mb: 2 }} textValue="Ver detalles" />
    </Box>
  );
};

export { CardRequest };
