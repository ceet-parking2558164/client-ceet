import {SxProps} from '@mui/material';

interface SxPropsStyles {
    container: SxProps
    containerPage: SxProps
}

const StylesSx:SxPropsStyles = {
    container: {
        overflowY: 'hidden',
        height: '100vh',
        pt: 12,
        margin: 0
    },
    containerPage: {
        flex: 1,
        p: 2,
        maxHeight: 'calc(100vh - 64px)',
        overflowY: 'auto',
    }
};


export {StylesSx};
