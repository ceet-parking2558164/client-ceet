import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../pages/NotFound/NotFound.tsx';
import {listMenuUser} from '../utils/menu/MenuUser.tsx';
import {QrImage} from '../common/molecules/QrImage/QrImage.tsx';
import {RegisterVehicle} from '../pages/RegisterVehicle/RegisterVehicle.tsx';
import {Welcome} from '../pages/Welcome/Welcome.tsx';
import {ProfileUser} from '../pages/Profile/ProfileUser.tsx';
import {useAppSelector} from '../hooks/useAppRedux.ts';
import {LayoutPrivate} from '../containers/LayoutPrivate/LayoutPrivate.tsx';
import {routesGlobals, routesUser} from '../utils/constants/routes.ts';
import {Messages} from '../pages/Messages/Messages.tsx';


const ProtectRoutesUsers = () => {
    const userAuth = useAppSelector(state => state.auth.user);
    return (
        <>
            {
                userAuth?.rol === 'Usuario' ? (
                    <LayoutPrivate list={listMenuUser}>
                        <Routes>
                            <Route index element={<Welcome/>}/>
                            <Route path={routesGlobals.PROFILE} element={<ProfileUser/>}/>
                            <Route path={routesUser.QR_VEHICLE} element={<QrImage/>}/>
                            <Route path={routesUser.REGISTER_VEHICLE} element={<RegisterVehicle/>}/>
                            <Route path={routesGlobals.MESSAGE} element={<Messages/>}/>
                        </Routes>
                    </LayoutPrivate>
                ) : <NotFound/>
            }
        </>
    );
};


export {ProtectRoutesUsers};
