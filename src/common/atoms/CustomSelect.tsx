import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';

import {CustomSelectProps} from '../../types/common/atoms/CustomSelectProps.ts';
import {FC} from 'react';

const CustomSelect:FC<CustomSelectProps> = (props) => {

    const {options, form, value} = props;

    return (
        <FormControl fullWidth>
            <InputLabel id="select-label">Tipo de documento</InputLabel>
            <Select
                labelId="select-label"
                id="demo-simple-select"
                value={value ? value : ''}
                label='Tipo de documento'
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
