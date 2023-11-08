import {SelectProps, SxProps} from "@mui/material";

interface CustomSelectProps extends SelectProps{
    options: string[],
    valueSelect: string
    sx?: SxProps
}

export type {CustomSelectProps}
