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
        bgcolor: theme.palette.primary.light,
        p: 10
    }
};


export {StylesSx};
