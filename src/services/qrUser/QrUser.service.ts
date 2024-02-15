import {parkingApi} from '../../api/parkingApi.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';

class QrServiceUser{

    private readonly tokenAccess;

    constructor() {
        this.tokenAccess = getAccessToken('token');
    }
    async getQrUserById(userId:string){
        const token = this.tokenAccess;
        return await parkingApi.get(`qr-code/${userId}`, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
}

export {QrServiceUser};