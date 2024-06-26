import {FC} from 'react';
import {CustomSelectProps} from '../../types/common/atoms/CustomSelectProps.ts';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';


const CustomSelect:FC<CustomSelectProps> = (props) => {

    const {options, form, value, label} = props;

    return (
        <FormControl fullWidth>
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                labelId="select-label"
                id="demo-simple-select"
                value={value ? value : ''}
                {...form}
                {...props}
            >
                <MenuItem disabled value="">
                    <em>Escoge una opcion</em>
                </MenuItem>
                {
                    options.map((opc, index) => (
                        <MenuItem key={index} value={opc}>
                            {opc}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};

export {CustomSelect};
{/*<select*/}
{/*    id="demo-simple-select"*/}
{/*    defaultValue=''*/}
{/*    {...form}*/}
{/*>*/}
{/*    <option value='' disabled>Select.......</option>*/}
{/*    {*/}
{/*        options.map((opc, index) => (*/}
{/*            <option key={index} value={opc}>*/}
{/*                {opc}*/}
{/*            </option>*/}
{/*        ))*/}
{/*    }*/}
{/*</select>*/}
