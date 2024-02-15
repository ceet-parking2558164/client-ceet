import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import {Search} from '@mui/icons-material';

import{ChangeEvent, FC, useState} from 'react';
import {NavBar} from '../../types/components/NavBar.ts';
import {useAppDispatch} from '../../hooks/useRedux/useAppRedux.ts';
import {searchUser, setSelectRole} from '../../redux/reducer/user.slice.ts';
const NavBarUser:FC<NavBar> = ({listOpc, nameBar}) => {

    const dispatch = useAppDispatch();
    const [rol, setRol] = useState<string>('');

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        dispatch(searchUser(e.target.value));
    };

    const handleSelectChange = (e:SelectChangeEvent ) => {
        setRol(e.target.value);
        dispatch(setSelectRole(e.target.value));
    };

    return (
        <Box sx={{mb:5}}>
            <Typography variant='h5' sx={{textAlign: 'center'}}>{nameBar}</Typography>
            <Typography variant='subtitle1' sx={{p:2}}>Filtrar por: </Typography>
            <Box sx={{display: 'flex', width: '100%',gap:2}}>
                <FormControl fullWidth>
                    <InputLabel id="select-label">{nameBar}</InputLabel>
                    <Select
                        labelId="select-label"
                        id="demo-simple-select"
                        value={rol}
                        label={rol}
                        onChange={handleSelectChange}
                    >
                        <MenuItem disabled value="">
                            <em>Escoge una opcion</em>
                        </MenuItem>
                        {
                            listOpc.map((opc, index) => (
                                <MenuItem key={index} value={opc}>
                                    {opc}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <OutlinedInput
                    placeholder='Buscar usuario'
                    id="outlined-adornment-password"
                    type='text'
                    sx={{width: '100%'}}
                    onChange={handleChange}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton edge="start">
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Box>
        </Box>
    );
};

export {NavBarUser};
