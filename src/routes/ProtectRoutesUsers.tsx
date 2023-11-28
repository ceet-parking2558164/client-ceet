import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../pages/NotFound/NotFound.tsx';
import {QrImage} from '../common/molecules/QrImage/QrImage.tsx';
import {RegisterVehicle} from '../pages/RegisterVehicle/RegisterVehicle.tsx';
import {useAppSelector} from '../hooks/useRedux/useAppRedux.ts';
import {routesUser} from '../utils/constants/routes.ts';

const ProtectRoutesUsers = () => {
    const userAuth = useAppSelector(state => state.auth.user);
    return (
        <>
            {
                userAuth?.rol === 'Usuario' ? (
                    <Routes>
                        <Route path={routesUser.QR_VEHICLE} element={<QrImage/>}/>
                        <Route path={routesUser.REGISTER_VEHICLE} element={<RegisterVehicle/>}/>
                    </Routes>
                ) : <NotFound/>
            }
        </>
    );
};


export {ProtectRoutesUsers};
