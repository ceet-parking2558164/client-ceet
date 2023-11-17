import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from '@mui/material';
import {CustomSelectProps} from '../../types/atoms/CustomSelectProps.ts';
import {FC} from 'react';

const CustomSelect:FC<CustomSelectProps> = (props) => {
    const {options, form} = props;

    const error = null;
    return (
        <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...props}
                label={props.label}
                {...form}
            >
                {
                    options.map((opc) => (
                        <MenuItem key={opc} value={opc}>
                            {opc}
                        </MenuItem>
                    ))
                }
            </Select>
            <FormHelperText>{error && 'Error'}</FormHelperText>
        </FormControl>
    );
};

export {CustomSelect};
