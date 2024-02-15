import {Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {Delete} from '@mui/icons-material';
import {NavBarUser} from '../../components/NavBarUser/NavBarUser.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';
import {useEffect} from 'react';
import {getAllVehiclesThunk, deleteVehicleThunk} from '../../redux/actions/admin/vehicles/vehicleThunk.ts';


const ListVehicles = () => {
    const dispatch = useAppDispatch();
    const {vehicles} = useAppSelector(state => state.vehicles);

    useEffect(() => {
        dispatch(getAllVehiclesThunk());
    }, []);

    const handleDeleteVehicle = async(idVehicle:string) => {
        await deleteVehicleThunk(idVehicle);
        dispatch(getAllVehiclesThunk());
    };

    return (
        <>
            <NavBarUser listOpc={['Carros', 'Motocicleta', 'Bicicleta']} nameBar="Vehiculos" />
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Imagen</TableCell>
                            <TableCell align="right">placa del vehiculo</TableCell>
                            <TableCell align="right">Modelo</TableCell>
                            <TableCell align="right">Detalles</TableCell>
                            <TableCell align="right">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            vehicles?.map((row) => (
                                <TableRow key={row.vehicle_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align='right'>
                                        <Avatar src={row.images[0] ? row.images[0]: ''} />
                                    </TableCell>
                                    <TableCell align='right'>{row.carPlate.toUpperCase()}</TableCell>
                                    <TableCell align='right'>{row.model}</TableCell>
                                    <TableCell align='right'>Ver</TableCell>
                                    <TableCell align='right'>
                                        <CustomItemIcon
                                            Icon={Delete}
                                            sx={{cursor: 'pointer'}}
                                            onClick={() =>handleDeleteVehicle(row.vehicle_id)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export {ListVehicles};
