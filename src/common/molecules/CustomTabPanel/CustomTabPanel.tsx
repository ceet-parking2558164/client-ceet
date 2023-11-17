import {TabPanel} from '../../../types/molecules/TabPanel.ts';
import {FC} from 'react';
import {Box} from '@mui/material';

const CustomTabPanel: FC<TabPanel> = (props) => {
    const {children, value, index} = props;
    return (
        <div
            role='tabpanel'
        >
            {
                value === index && (
                    <Box sx={{p: 3}}>
                        {children}
                    </Box>
                )
            }

        </div>
    );
};

export {CustomTabPanel};
