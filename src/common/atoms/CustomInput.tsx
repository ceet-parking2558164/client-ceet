import {FC, useState} from 'react';
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from '@mui/material';
import {CustomInputProps} from '../../types/atoms/CustomInputProps.ts';
import {Visibility, VisibilityOff} from '@mui/icons-material';

const CustomInput: FC<CustomInputProps> = (props) => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const {password, sx, form, label} = props;

    return (
        <>
            {
                password ? (
                    <FormControl sx={sx}>
                        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                        <OutlinedInput
                            {...form}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword} edge="end">
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={label}
                        />
                    </FormControl>
                ) : (
                    <TextField {...props} {...form}/>
                )
            }
        </>
    );
};

export {CustomInput};
