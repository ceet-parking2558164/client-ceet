import {SxProps} from '@mui/material';
import {CSSProperties} from 'react';

interface CardImage {
    boxImage: SxProps,
    button: SxProps
}

const styleSx:CardImage = {
    boxImage: {
        width: '100%',
        height: '140px',
        border: 1, mt: 2,
        borderRadius: '10px'
    },
    button: {
        width: '100%',
        mt: 2,
        fontSize: 10
    }
};

const styleImage:CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: 10
};
export {styleSx, styleImage};
