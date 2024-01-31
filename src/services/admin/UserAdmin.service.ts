import {parkingApi} from '../../api/parkingApi.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';
import {FieldValues} from 'react-hook-form';

class UserAdminService {
    async getAllUsers(){
        const token = getAccessToken('token');
        return await parkingApi.get('user/all-users', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
    async deleteUserById(idUser:string){
        const token = getAccessToken('token');
        return await parkingApi.delete( `user/${idUser}`, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }

    async registerUser(data:FieldValues){
        const token = getAccessToken('token');
        return await parkingApi.post('user/register', data, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
}

export {UserAdminService};
