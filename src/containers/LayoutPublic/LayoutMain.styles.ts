import {SxProps} from '@mui/material';
import {theme} from '../../theme/theme.ts';

const layoutStyle:SxProps = {
    width: '100%',
    minHeight: 'calc(100vh - 96px);',
    // height: 'calc(100vh - 96px);',
    zIndex: 8,
    bgcolor: theme.palette.primary.light,
    pt: 12,
};

export {layoutStyle};
