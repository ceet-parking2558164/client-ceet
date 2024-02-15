import {SxProps} from '@mui/material';
import {theme} from '../../theme/theme.ts';

const layoutStyle:SxProps = {
    width: '100%',
    minHeight: 'calc(100vh - 96px);',
    mt:12,
    zIndex: 8,
    bgcolor: theme.palette.primary.light,
};

export {layoutStyle};
