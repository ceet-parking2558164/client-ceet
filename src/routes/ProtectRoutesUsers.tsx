import {Route, Routes} from "react-router-dom";
import {NotFound} from "../pages/NotFound/NotFound.tsx";
import {LayoutUser} from "../containers/LayoutUser/LayoutUser.tsx";
import {listMenuUser} from "../utils/menu/MenuUser.tsx";
import {QrImage} from "../common/molecules/QrImage/QrImage.tsx";
import {RegisterVehicle} from "../pages/RegisterVehicle/RegisterVehicle.tsx";
import {Welcome} from "../pages/Welcome/Welcome.tsx";
import {routesUser, routesGlobals} from "../utils/constants/routes.ts";
import {ProfileUser} from "../pages/Profile/ProfileUser.tsx";

const ProtectRoutesUsers = () => {

    const role = null

    console.log(role)

    return (
        <>
            {
                role === 'Usuario' ? (
                    <LayoutUser list={listMenuUser}>
                        <Routes>
                            <Route path='/' element={<Welcome/>} />
                            <Route path={routesGlobals.PROFILE} element={<ProfileUser />} />
                            <Route path={routesUser.QR_VEHICLE} element={<QrImage />} />
                            <Route path={routesUser.REGISTER_VEHICLE} element={<RegisterVehicle />} />
                        </Routes>
                    </LayoutUser>
                ):<NotFound />
            }
        </>
    );
};

export {ProtectRoutesUsers};
