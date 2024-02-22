import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useRedux/useAppRedux';
import { getUserToken } from '../redux/actions/user/thunk';
import { getAccessToken } from '../utils/auth/localStorage';
import { initSocket } from '../utils/socket/socket';
import { ProtectRoutes } from './ProtectRoutes';

const ProtectRoutesWrapper = () => {
    const dispatch = useAppDispatch(); 
    const token: { token: string } = getAccessToken('token'); 
    useEffect(() => {
               
        if (token) {
            dispatch(getUserToken((token.token)));
            initSocket();
        }
    }, [dispatch, token]);


    return <ProtectRoutes />;
};

export {ProtectRoutesWrapper};