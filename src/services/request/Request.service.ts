import {parkingApi} from '../../api/parkingApi.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';

class RequestService {

    private readonly tokenAccess;
    constructor() {
        this.tokenAccess = getAccessToken('token');
    }
    async getDetailRequestUser(userId:string){
        const token = this.tokenAccess;
        return await parkingApi.get(`request/pending/${userId}`, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
}
export {RequestService};
