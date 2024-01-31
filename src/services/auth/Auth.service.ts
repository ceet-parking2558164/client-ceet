import {parkingApi} from '../../api/parkingApi.ts';
import {FieldValues} from 'react-hook-form';

class AuthService {
    async auth(payload:FieldValues){
        return await parkingApi.post('login-admin', payload);
    }

    async recoveryPass(payload:FieldValues){
        return await parkingApi.post('login-admin/recovery', payload);
    }

    async changePassword(payload:FieldValues){
        return await parkingApi.post('login-admin/change-password', payload);
    }
}
export {AuthService};
