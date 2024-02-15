import {NavBarUser} from '../../components/NavBarUser/NavBarUser.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';
import {useEffect} from 'react';
import {getAllRequestsThunk} from '../../redux/actions/request/requestThunk.ts';
import {CardRequest} from '../../components/CardRequest/CardRequest.tsx';
import {Typography} from '@mui/material';

const ListRequest = () => {

    const dispatch = useAppDispatch();
    const {requests} = useAppSelector(state => state.requests);

    useEffect(() => {
        dispatch(getAllRequestsThunk());
    }, []);

    return (
        <>
            <NavBarUser listOpc={['Pendiente', 'Acceptada', 'Rechazada']} nameBar='Solicitudes'/>
            {
                requests.length === 0 ?
                    <Typography variant='h3' textAlign='center'>Sin resultados</Typography>:
                    requests.map(req => (
                        <CardRequest
                            key={req.request_id}
                            imgUser={req.User.imageProfile}
                            fullName={`${req?.User.firstName} ${req?.User.lastName}`}
                            numberReq={req.request_id}
                            status={req.status}
                        />
                    ))
            }
        </>
    );
};

export {ListRequest};
