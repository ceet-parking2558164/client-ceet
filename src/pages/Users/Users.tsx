import {useEffect} from 'react';
import {Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {Delete} from '@mui/icons-material';
import {NavBarUser} from '../../components/NavBarUser/NavBarUser.tsx';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';
import {deleteUserThunk, getAllUserThunk} from '../../redux/actions/admin/users/thunk.ts';

const Users = () => {

    const dispatch = useAppDispatch();

    const {copyUsers} = useAppSelector(state => state.allUsers);

    useEffect(() => {
        dispatch(getAllUserThunk());
    }, [dispatch]);

    const handleDeleteUser = async (id:string|undefined) => {
        if (id){
            await deleteUserThunk(id);
            dispatch(getAllUserThunk());
        }
    };

    return (
        <>
            <NavBarUser listOpc={['Usuario', 'Guarda de seguridad']} nameBar='Usuarios' />
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell >Imagen</TableCell>
                            <TableCell align="right">Nombre Completo</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Numero de Celular</TableCell>
                            <TableCell align="right">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {copyUsers?.map((row) => (
                            <TableRow
                                key={row.user_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell size='medium' component="th" scope="row">
                                    <Avatar src={row.imageProfile ? row.imageProfile: ''} />
                                </TableCell>
                                <TableCell align="right">{`${row.firstName} ${row.lastName}`}</TableCell>
                                <TableCell align="right">{row.rol}</TableCell>
                                <TableCell align="right">{row.phoneNumber}</TableCell>
                                <TableCell align="right">Ver</TableCell>
                                <TableCell align="right">
                                    <CustomItemIcon
                                        Icon={Delete}
                                        sx={{cursor: 'pointer'}}
                                        onClick={() => handleDeleteUser(row.user_id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export {Users};
