import {Routes, Route} from "react-router-dom";
import {NotFound} from "../pages/NotFound/NotFound.tsx";
import {LayoutUser} from "../containers/LayoutUser/LayoutUser.tsx";
import {listMenuAdmin} from "../utils/menu/MemuAdmin.tsx";
import {routeAdmin, routesGlobals} from "../utils/constants/routes.ts";
import {Welcome} from "../pages/Welcome/Welcome.tsx";
import {ProfileUser} from "../pages/Profile/ProfileUser.tsx";
import {RegisterUser} from "../pages/RegisterUser/RegisterUser.tsx";
import {Messages} from "../pages/Messages/Messages.tsx";



const ProtectRoutesAdmin = () => {
    const user:string = 'Administrador'

    console.log(user)

    return (
        <>
            {
                user === 'Administrador' ? (
                    <LayoutUser list={listMenuAdmin}>
                        <Routes>
                            <Route path='/' element={<Welcome />} />
                            <Route path={routesGlobals.PROFILE} element={<ProfileUser />} />
                            <Route path={routeAdmin.REGISTER_USER} element={<RegisterUser />} />
                            <Route path={routeAdmin.MESSAGE} element={<Messages />} />
                        </Routes>
                    </LayoutUser>
                ): <NotFound />
            }

        </>
    );
};

export {ProtectRoutesAdmin};
