import {BaseTextFieldProps, SxProps} from '@mui/material';
import {UseFormRegisterReturn} from 'react-hook-form';

interface CustomInputProps extends BaseTextFieldProps{
    password?: string,
    sx?: SxProps
    form?: UseFormRegisterReturn
}

export type {CustomInputProps};
