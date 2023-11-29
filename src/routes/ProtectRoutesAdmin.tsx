import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../pages/NotFound/NotFound.tsx';
import {RegisterUser} from '../pages/RegisterUser/RegisterUser.tsx';
import {useAppSelector} from '../hooks/useRedux/useAppRedux.ts';
import {routesAdmin} from '../utils/constants/routes.ts';
import {DashBoard} from '../pages/DashBoard/DashBoard.tsx';
import {Users} from '../pages/Users/Users.tsx';

const ProtectRoutesAdmin = () => {
    const userAuth = useAppSelector(state => state.auth.user);
    return (
        <>
            {
                userAuth?.rol === 'Administrador' ? (
                    <Routes>
                        <Route path={routesAdmin.REGISTER_USER} element={<RegisterUser />} />
                        <Route path={routesAdmin.DASHBOARD} element={<DashBoard />} />
                        <Route path={routesAdmin.USERS} element={<Users />} />
                    </Routes>
                ):<NotFound />
            }
        </>
    );
};

export {ProtectRoutesAdmin};
