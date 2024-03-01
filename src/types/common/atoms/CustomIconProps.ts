import React from 'react';
import {IconButtonProps, SxProps, Theme, ListItemIconProps} from '@mui/material';

interface CustomIconProps extends IconButtonProps{
    Icon: React.ElementType
    sxStyles?: SxProps<Theme>
}

interface ItemList extends ListItemIconProps{
    Icon: React.ElementType
    sxStyles?: SxProps<Theme>
}

export type {CustomIconProps, ItemList};
