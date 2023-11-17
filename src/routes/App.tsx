import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from '../components/Header/Header.tsx';
import {ProtectRoutes} from './ProtectRoutes.tsx';
import {ProtectRoutesUsers} from './ProtectRoutesUsers.tsx';
import {ProtectRoutesAdmin} from './ProtectRoutesAdmin.tsx';
import {RoutesNotFound} from './RoutesNotFound.tsx';
import {RoutesPublic} from './RoutesPublics.tsx';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <RoutesNotFound>
                <Route path='/*' element={<RoutesPublic/>}/>
                <Route path={'/welcome-system'} element={<ProtectRoutes/>}>
                    <Route path={'/welcome-system/user/*'} element={<ProtectRoutesUsers/>}/>
                    <Route path={'/welcome-system/admin/*'} element={<ProtectRoutesAdmin/>}/>
                </Route>
            </RoutesNotFound>
        </BrowserRouter>
    );
}


export default App;






