import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "../components/Header/Header.tsx";
import {LayoutMain} from "../containers/Layout/LayoutMain.tsx";
import {LoginForm} from "../pages/Login/LoginForm.tsx";
import {Home} from "../pages/Home/Home.tsx";
import {RecoveryPassword} from "../pages/RecoveryPassword/RecoveryPassword.tsx";
import {routesPublics} from "../utils/constants/routes.ts";
import {ProtectRoutes} from './ProtectRoutes.tsx'
import {ProtectRoutesUsers} from "./ProtectRoutesUsers.tsx";
import {routesGlobals} from "../utils/constants/routes.ts";
import {ProtectRoutesAdmin} from "./ProtectRoutesAdmin.tsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <LayoutMain>
                <Routes>
                    <Route path={routesPublics.HOME} element={<Home/>}/>
                    <Route path={routesPublics.LOGIN} element={<LoginForm/>}/>
                    <Route path={routesPublics.RECOVERY} element={<RecoveryPassword/>}/>
                    <Route element={<ProtectRoutes />}>
                        <Route path={`${routesGlobals.ROOT}/*`} element={<ProtectRoutesUsers />} />
                        <Route path={`${routesGlobals.ROOT}/admin/*`} element={<ProtectRoutesAdmin />} />
                    </Route>
                </Routes>
            </LayoutMain>
        </BrowserRouter>
    )
}

export default App
