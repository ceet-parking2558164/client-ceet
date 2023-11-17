import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../pages/NotFound/NotFound.tsx';
import {listMenuAdmin} from '../utils/menu/MemuAdmin.tsx';
import {Welcome} from '../pages/Welcome/Welcome.tsx';
import {ProfileUser} from '../pages/Profile/ProfileUser.tsx';
import {RegisterUser} from '../pages/RegisterUser/RegisterUser.tsx';
import {Messages} from '../pages/Messages/Messages.tsx';
import {useAppSelector} from '../hooks/useAppRedux.ts';
import {LayoutPrivate} from '../containers/LayoutPrivate/LayoutPrivate.tsx';
import {routesAdmin, routesGlobals} from '../utils/constants/routes.ts';

const ProtectRoutesAdmin = () => {
    const userAuth = useAppSelector(state => state.auth.user);
    return (
        <>
            {
                userAuth?.rol === 'Administrador' ? (
                    <LayoutPrivate list={listMenuAdmin}>
                        <Routes>
                            <Route index element={<Welcome />} />
                            <Route path={routesGlobals.PROFILE} element={<ProfileUser />} />
                            <Route path={routesAdmin.REGISTER_USER} element={<RegisterUser />} />
                            <Route path={routesGlobals.MESSAGE} element={<Messages/>}/>
                        </Routes>
                    </LayoutPrivate>
                ):<NotFound />
            }
        </>
    );
};

export {ProtectRoutesAdmin};

