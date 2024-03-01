import {SxProps} from '@mui/material';
import {CSSProperties} from 'react';

interface StyleSx {
    customInput: SxProps
    customButton: SxProps
}

const styleSx:StyleSx = {
    customInput: {
        width: '100%',
        mb: 3
    },
    customButton: {
        width: '100%',
        height: '15%',
        mt: 2
    }
};

const styleFormUser:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    border: '5px',
    /* gap: 15, */
    width: '100%'
};

export {styleFormUser, styleSx};
