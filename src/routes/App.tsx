import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from '../components/Header/Header.tsx';
import {ProtectRoutesUsers} from './ProtectRoutesUsers.tsx';
import {ProtectRoutesAdmin} from './ProtectRoutesAdmin.tsx';
import {RoutesNotFound} from './RoutesNotFound.tsx';
import {RoutesPublic} from './RoutesPublics.tsx';
import {routesGlobals} from '../utils/constants/routes.ts';
import {Welcome} from '../pages/global/Welcome/Welcome.tsx';
import { ProfileUser } from '../pages/global/Profile/ProfileUser.tsx';
import { Chats } from '../pages/global/Chats/Chats.tsx';
import { Message } from '../pages/global/Message/Message.tsx';
import {ProtectRoutesSecurity} from './ProtectRoutesSecurity.tsx';
import { ProtectRoutesWrapper } from './ProtectRoutesWrapper.tsx';
import { LayoutChat } from '../containers/LayoutChat/LayoutChat.tsx';

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