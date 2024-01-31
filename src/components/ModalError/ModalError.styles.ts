import {SxProps} from '@mui/material';
import {CSSProperties} from 'react';

const styleContainer:SxProps = {
    bgcolor: 'rgba(255,2,2,0.34)',
    mt: 2,
    p: 1,
    borderRadius: 2,
    width: '50%'
};

const styleLi:CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
};

export {styleContainer, styleLi};
