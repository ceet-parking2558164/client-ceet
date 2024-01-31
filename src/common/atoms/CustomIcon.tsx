import {FC} from 'react';
import {IconButton} from '@mui/material';
import {CustomIconProps} from '../../types/common/atoms/CustomIconProps.ts';


const CustomIcon: FC<CustomIconProps> = ({Icon, sxStyles, ...rest}) => {
    return (
        <IconButton {...rest} >
            <Icon sx={sxStyles}/>
        </IconButton>
    );
};

export {CustomIcon};
