import {LayoutPublic} from '../containers/LayoutPublic/LayoutPublic.tsx';
import {Navigate, Route, Routes} from 'react-router-dom';
import {routesPublics} from '../utils/constants/routes.ts';
import {Home} from '../pages/Home/Home.tsx';
import {LoginForm} from '../pages/Login/LoginForm.tsx';
import {RecoveryPassword} from '../pages/RecoveryPassword/RecoveryPassword.tsx';
import {getAccessToken} from '../utils/auth/localStorage.ts';


const RoutesPublic = () => {
    const auth = getAccessToken('token');
    return (
        <>
            {
                !auth ? (
                    <LayoutPublic>
                        <Routes>
                            <Route path={routesPublics.HOME} element={<Home/>}/>
                            <Route path={routesPublics.LOGIN} element={<LoginForm/>}/>
                            <Route path={routesPublics.RECOVERY} element={<RecoveryPassword/>}/>
                        </Routes>
                    </LayoutPublic>
                ) : <Navigate to='/welcome-system'/>
            }
        </>
    );
};

export {RoutesPublic};
