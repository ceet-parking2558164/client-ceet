import {parkingApi} from '../../api/parkingApi.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';


class UserService {
    async getUserByToken(token:string){
        const data = {
            token : token
        };
        return await parkingApi.post('user/get-user', data);
    }

    async updateUser(payload:FormData){
        const token = getAccessToken('token');
        return await parkingApi.put('user/update', payload, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
}
export {UserService};
