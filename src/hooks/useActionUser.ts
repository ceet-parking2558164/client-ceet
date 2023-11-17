import {useAppDispatch} from './useAppRedux.ts';
import {loginUser} from '../redux/actions/auth/thunk.ts';
import {FieldValues} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {routesGlobals} from '../utils/constants/routes.ts';

const useActionLogin = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleLogin = async (data: FieldValues) => {
        await dispatch(loginUser(data));
        navigate(`${routesGlobals.ROOT}`);
    };

    return {
        handleLogin
    };
};

export {useActionLogin};
