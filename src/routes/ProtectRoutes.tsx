import {Navigate, Outlet} from 'react-router-dom';
import {routesPublics} from '../utils/constants/routes.ts';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux/useAppRedux.ts';
import {useEffect} from 'react';
import {getAccessToken} from '../utils/auth/localStorage.ts';
import {getUserToken} from '../redux/actions/user/thunk.ts';
import {initSocket, socket} from '../utils/socket/socket.ts';
import {CustomSpinner} from '../common/atoms/CustomSpinner.tsx';
import {listMenuAdmin} from '../utils/menu/MemuAdmin.tsx';
import {LayoutPrivate} from '../containers/LayoutPrivate/LayoutPrivate.tsx';
import {listMenuUser} from '../utils/menu/MenuUser.tsx';
import {listMenuSecurity} from '../utils/menu/MenuSegurity.tsx';

interface Interface {
    token: string
}

const ProtectRoutes = () => {

    const dispatch = useAppDispatch();
    const {loading, user} = useAppSelector(state => state.auth);

    useEffect(() => {
        const token:Interface = getAccessToken('token');
        if(token){
            dispatch(getUserToken((token.token)));
            initSocket();
        }
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (user && socket){
            socket.emit('subscribe', user?.user_id);
        }
    }, [dispatch, user]);

    const token:Interface = getAccessToken('token');
    if (!token){
        return <Navigate to={routesPublics.LOGIN} />;
    }

    return (
        <LayoutPrivate list={user?.rol === 'Administrador' ? listMenuAdmin : user?.rol === 'Usuario' ? listMenuUser: listMenuSecurity}>
            {
                loading ? <CustomSpinner /> : <Outlet />
            }
        </LayoutPrivate>
    );
};

export {ProtectRoutes};
