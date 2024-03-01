import {CSSProperties} from 'react';
import {SxProps} from '@mui/material';

interface SxStyles {
    customInput:SxProps,
    customButton: SxProps
}

const sxRecovery:SxStyles = {
    customInput: {
        width: '100%'
    },
    customButton: {
        width: '100%'
    }
};

const styleFormRecovery:CSSProperties = {
    padding: '60px 10px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 4px rgba(2,2,0,0.5)',
    borderRadius: 3,
    gap: 20
};

export {
    styleFormRecovery,
    sxRecovery
};
