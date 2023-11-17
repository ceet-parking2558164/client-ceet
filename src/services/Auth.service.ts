import {parkingApi} from '../api/parkingApi.ts';
import {FieldValues} from 'react-hook-form';

class AuthService {
    async auth(payload:FieldValues){
        return await parkingApi.post('login-admin', payload);
    }
}
export {AuthService};
