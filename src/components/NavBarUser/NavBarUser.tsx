import {Box, IconButton, InputAdornment, OutlinedInput, Typography} from '@mui/material';
import {Search} from '@mui/icons-material';
import {useFormRegister} from '../../hooks/useFormRegister/useFormRegister.ts';
import {CustomSelect} from '../../common/atoms/CustomSelect.tsx';
const NavBarUser = () => {

    const {
        register,
        watch
    } = useFormRegister();

    const {rol} = watch();

    return (
        <Box sx={{mb:5}}>
            <Typography variant='h5' sx={{textAlign: 'center'}}>Usuarios</Typography>
            <Typography variant='subtitle1' sx={{p:2}}>Filtrar por: </Typography>
            <Box sx={{display: 'flex', width: '100%',gap:2}}>
                <CustomSelect
                    sx={{width: '100%'}}
                    label='Role del usuario'
                    value={rol || ''}
                    options={['Todos','Usuarios', 'Seguridad', 'Administrador']}
                    form={register('rol')}
                />
                <OutlinedInput
                    placeholder='Buscar usuario'
                    id="outlined-adornment-password"
                    type='text'
                    sx={{width: '100%'}}
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
