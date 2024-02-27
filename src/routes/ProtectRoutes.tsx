import {Navigate, Outlet} from 'react-router-dom';
import {routesPublics} from '../utils/constants/routes.ts';
import {useAppSelector} from '../hooks/useRedux/useAppRedux.ts';
import {getAccessToken} from '../utils/auth/localStorage.ts';
import {CustomSpinner} from '../common/atoms/CustomSpinner.tsx';
import {listMenuAdmin} from '../utils/menu/MemuAdmin.tsx';
import {LayoutPrivate} from '../containers/LayoutPrivate/LayoutPrivate.tsx';
import {listMenuUser} from '../utils/menu/MenuUser.tsx';
import {listMenuSecurity} from '../utils/menu/MenuSegurity.tsx';


interface Interface {
    token: string
}

const ProtectRoutes = () => {

    const {user, loading} = useAppSelector(state => state.auth);
 
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
