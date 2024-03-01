import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../pages/global/NotFound/NotFound.tsx';
import { RegisterUser } from '../pages/admin/RegisterUser/RegisterUser.tsx';
import {useAppSelector} from '../hooks/useRedux/useAppRedux.ts';
import {routesAdmin} from '../utils/constants/routes.ts';
import { DashBoard } from '../pages/admin/DashBoard/DashBoard.tsx';
import {Users} from '../pages/admin/Users/Users.tsx';
import { DetailRequestUser } from '../pages/admin/DetailRequest/DetailRequestUser.tsx';
import { ListVehicles } from '../pages/admin/ListVehicles/ListVehicles.tsx';
import { ListRequest } from '../pages/admin/ListRequest/ListRequest.tsx';


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
                        <Route path={routesAdmin.VEHICLES} element={<ListVehicles />}/>
                        <Route path={routesAdmin.REQUEST} element={<ListRequest />} />
                        <Route path={`${routesAdmin.REQUEST}/:userId`} element={<DetailRequestUser />} />
                    </Routes>
                ):<NotFound />
            }
        </>
    );
};

export {ProtectRoutesAdmin};
