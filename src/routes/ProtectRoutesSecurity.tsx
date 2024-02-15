import {Route, Routes } from 'react-router-dom';
import {useAppSelector} from '../hooks/useRedux/useAppRedux.ts';
import { NotFound } from '../pages/NotFound/NotFound.tsx';
import {QrScanner} from '../pages/QrScanner/QrScanner.tsx';

const ProtectRoutesSecurity = () => {

    const {user} = useAppSelector(state => state.auth);

    return (
        <>
            {
                user?.rol === 'Guarda de seguridad' ?
                    (
                        <Routes>
                            <Route path='/scanner' element={<QrScanner />} />
                        </Routes>
                    ): <NotFound />
            }
        </>
    );
};

export {ProtectRoutesSecurity};
