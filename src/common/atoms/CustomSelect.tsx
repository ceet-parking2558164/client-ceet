import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";
import {CustomSelectProps} from "../../types/atoms/CustomSelectProps.ts";
import {FC} from "react";

const CustomSelect:FC<CustomSelectProps> = (props) => {
    const {options, valueSelect, sx} = props;
    const error = null;
    return (
        <FormControl fullWidth sx={sx}>
            <InputLabel
            >{props.label}</InputLabel>
            <Select
                label={props.label}
                value={valueSelect}
            >
                {
                    options.map((opc:string) => (
                        <MenuItem key={opc}>
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
