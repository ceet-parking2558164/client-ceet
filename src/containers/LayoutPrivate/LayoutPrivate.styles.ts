import {SxProps} from '@mui/material';
import {theme} from '../../theme/theme.ts';

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
        bgcolor: theme.palette.primary.light,
        p: 10,
        maxHeight: 'calc(100vh - 64px)',
        overflowY: 'auto'
    }
};


export {StylesSx};
