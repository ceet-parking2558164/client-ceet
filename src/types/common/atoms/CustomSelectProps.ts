import {SelectProps} from '@mui/material';
import {UseFormRegisterReturn} from 'react-hook-form';

interface CustomSelectProps extends SelectProps{
    options: string[],
    form?: UseFormRegisterReturn
}

export type {CustomSelectProps};
