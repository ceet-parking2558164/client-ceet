import {UserService} from '../../../services/User.service.ts';
import {AppDispatch} from '../../store/store.ts';
import {setLoading, userAct} from '../../reducer/auth.slice.ts';

const userService = new UserService();

const getUserToken = (token: string) => {
    return async function (dispatch: AppDispatch) {
        try {
            dispatch(setLoading(true));
            const response = await userService.getUserByToken(token);
            if (response.status === 200) {
                dispatch(userAct(response.data));
                return response.data;
            }
        } catch (e) {
            console.error(e);
            dispatch(setLoading(false));
        }
    };
};

export {getUserToken};
