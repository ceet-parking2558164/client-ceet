import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../pages/NotFound/NotFound.tsx';
import {RegisterUser} from '../pages/RegisterUser/RegisterUser.tsx';
import {useAppSelector} from '../hooks/useRedux/useAppRedux.ts';
import {routesAdmin} from '../utils/constants/routes.ts';

const ProtectRoutesAdmin = () => {
    const userAuth = useAppSelector(state => state.auth.user);
    return (
        <>
            {
                userAuth?.rol === 'Administrador' ? (
                    <Routes>
                        <Route path={routesAdmin.REGISTER_USER} element={<RegisterUser />} />
                    </Routes>
                ):<NotFound />
            }
        </>
    );
};

export {ProtectRoutesAdmin};
