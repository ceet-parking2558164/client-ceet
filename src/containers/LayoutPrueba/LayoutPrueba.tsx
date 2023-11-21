import {FC} from 'react';
import {LayoutPruebaProps} from '../../types/containers/children/ChildrenProps.ts';
import {Box} from '@mui/material';



const LayoutPrueba:FC<LayoutPruebaProps> = ({children}) => {
    return (
        <Box>
            {children}
        </Box>
    );
};

export {LayoutPrueba};
