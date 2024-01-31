import {FC} from 'react';
import {ItemList} from '../../types/common/atoms/CustomIconProps.ts';
import {ListItemIcon} from '@mui/material';

const CustomItemIcon: FC<ItemList> = ({Icon, sxStyles, ...rest}) => {
    return (
        <ListItemIcon {...rest}>
            <Icon sx={sxStyles}/>
        </ListItemIcon>
    );
};

export {CustomItemIcon};
