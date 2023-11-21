import {Box, Hidden} from '@mui/material';
import {FC} from 'react';
import {ChildrenProps} from '../../types/containers/children/ChildrenProps.ts';
import {styleContainer} from './SidebarMenu.styles.ts';
import {theme} from '../../theme/theme.ts';

const SidebarMenu: FC<ChildrenProps> = ({children}) => {
    return (
        <Hidden lgDown>
            <Box bgcolor={theme.palette.primary.main} sx={styleContainer}>
                {children}
            </Box>
        </Hidden>
    );
};

export {SidebarMenu};
