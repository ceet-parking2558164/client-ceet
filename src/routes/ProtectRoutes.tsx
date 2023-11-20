import {Navigate, Outlet} from 'react-router-dom';
import {routesPublics} from '../utils/constants/routes.ts';
import {useAppDispatch, useAppSelector} from '../hooks/useAppRedux.ts';
import {useEffect} from 'react';
import {getAccessToken} from '../utils/auth/localStorage.ts';
import {getUserToken} from '../redux/actions/user/thunk.ts';
import {initSocket} from '../utils/socket/socket.ts';
import {CustomSpinner} from '../common/atoms/CustomSpinner.tsx';
import {listMenuAdmin} from '../utils/menu/MemuAdmin.tsx';
import {LayoutPrivate} from '../containers/LayoutPrivate/LayoutPrivate.tsx';
import {listMenuUser} from '../utils/menu/MenuUser.tsx';

interface Interface {
    token: string
}

initSocket();

const ProtectRoutes = () => {

    const dispatch = useAppDispatch();
    const {loading, user} = useAppSelector(state => state.auth);

    useEffect(() => {
        const token:Interface = getAccessToken('token');
        if(token){
            dispatch(getUserToken((token.token)));
        }
        // eslint-disable-next-line
    }, []);

    const token:Interface = getAccessToken('token');
    if (!token){
        return <Navigate to={routesPublics.LOGIN} />;
    }

    return (
        <LayoutPrivate list={user?.rol === 'Administrador' ? listMenuAdmin : listMenuUser}>
            {
                loading ? <CustomSpinner /> : <Outlet />
            }
        </LayoutPrivate>
    );
};

export {ProtectRoutes};
