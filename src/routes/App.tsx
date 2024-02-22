import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from '../components/Header/Header.tsx';
import {ProtectRoutes} from './ProtectRoutes.tsx';
import {ProtectRoutesUsers} from './ProtectRoutesUsers.tsx';
import {ProtectRoutesAdmin} from './ProtectRoutesAdmin.tsx';
import {RoutesNotFound} from './RoutesNotFound.tsx';
import {RoutesPublic} from './RoutesPublics.tsx';
import {routesGlobals} from '../utils/constants/routes.ts';
import {Welcome} from '../pages/Welcome/Welcome.tsx';
import {ProfileUser} from '../pages/Profile/ProfileUser.tsx';
import {Chats} from '../pages/Chats/Chats.tsx';
import {Message} from '../pages/Message/Message.tsx';
import {ProtectRoutesSecurity} from './ProtectRoutesSecurity.tsx';
import { LayoutChat } from '../containers/LayoutChat/LayoutChat.tsx';
import { ProtectRoutesWrapper } from './ProtectRoutesWrapper.tsx';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <RoutesNotFound>
                <Route path='/*' element={<RoutesPublic/>}/>
                <Route path={routesGlobals.ROOT} element={<ProtectRoutesWrapper/>}>
                    <Route index element={<Welcome />} /> 
                    <Route path={routesGlobals.PROFILE} element={<ProfileUser />} />
                    <Route element={<LayoutChat />}>
                        <Route path={routesGlobals.CHAT} element={<Chats />} />
                        <Route path={`${routesGlobals.MESSAGE}/:chatId`} element={<Message />} />
                    </Route>
                    <Route path={`${routesGlobals.ROOT}/user/*`} element={<ProtectRoutesUsers/>}/>
                    <Route path={`${routesGlobals.ROOT}/admin/*`} element={<ProtectRoutesAdmin/>}/>
                    <Route path={`${routesGlobals.ROOT}/security/*`} element={<ProtectRoutesSecurity />} />
                </Route>
            </RoutesNotFound>
        </BrowserRouter>
    );
}

export default App;