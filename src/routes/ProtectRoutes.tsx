import { Navigate, Outlet } from 'react-router-dom';
import {routesPublics} from "../utils/constants/routes.ts";

const ProtectRoutes = () => {

    const user = 'Andres';

    if (!user){
        return <Navigate to={routesPublics.LOGIN} />
    }

    return <Outlet />
};

export {ProtectRoutes};
