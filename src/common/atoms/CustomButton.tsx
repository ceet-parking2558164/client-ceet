import {Button} from '@mui/material';
import {CustomButtonProps} from '../../types/atoms/CustomButtonProps.ts';
import {FC} from 'react';

const CustomButton: FC<CustomButtonProps> = ({textValue, ...rest}) => {

    return (
        <Button {...rest}>{textValue}</Button>
    );
};

export {CustomButton};
