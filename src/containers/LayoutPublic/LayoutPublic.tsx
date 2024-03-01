import {FC} from 'react';
import {Box} from '@mui/material';
import {layoutStyle} from './LayoutMain.styles.ts';
import {ChildrenProps} from '../../types/containers/children/ChildrenProps.ts';


const LayoutPublic: FC<ChildrenProps> = ({children}) => {
    return (
        <Box sx={layoutStyle}>
            {children}
        </Box>
    );
};

export {LayoutPublic};
