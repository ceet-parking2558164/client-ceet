import {BaseTextFieldProps, SxProps} from "@mui/material";

interface CustomInputProps extends BaseTextFieldProps{
    password?: string,
    sx?: SxProps
}

export type {CustomInputProps}
