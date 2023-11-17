import {Navigate, Outlet, useNavigate} from 'react-router-dom';
import {routesPublics} from '../utils/constants/routes.ts';
import {useAppDispatch, useAppSelector} from '../hooks/useAppRedux.ts';
import {useEffect} from 'react';
import {getAccessToken} from '../utils/auth/localStorage.ts';
import {getUserToken} from '../redux/actions/user/thunk.ts';
import {initSocket} from '../utils/socket/socket.ts';
import {CustomSpinner} from '../common/atoms/CustomSpinner.tsx';

interface Interface {
    token: string
}

initSocket();

const ProtectRoutes = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loading = useAppSelector(state => state.auth.loading);


    useEffect(() => {
        const token:Interface = getAccessToken('token');
        if(token){
            dispatch(getUserToken((token.token))).then(res => {
                if (res.rol === 'Administrador') navigate('/welcome-system/admin/');
                else navigate('/welcome-system/user/');
            });
        }
        // eslint-disable-next-line
    }, []);



    const token:Interface = getAccessToken('token');
    if (!token){
        return <Navigate to={routesPublics.LOGIN} />;
    }

    return (
        <>
            {
                loading ? <CustomSpinner /> : <Outlet />
            }
        </>
    );
};

export {ProtectRoutes};
