import {ElementType} from "react";
import {IconButtonProps, SxProps, Theme, ListItemIconProps} from "@mui/material";

interface CustomIconProps extends IconButtonProps{
    Icon: ElementType
    sxStyles?: SxProps<Theme>
}

interface ItemList extends ListItemIconProps{
    Icon: ElementType
    sxStyles?: SxProps<Theme>
}

export type {CustomIconProps, ItemList}
