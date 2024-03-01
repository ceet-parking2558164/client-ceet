import {parkingApi} from '../../api/parkingApi.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';

class RequestService {

    private readonly tokenAccess;
    constructor() {
        this.tokenAccess = getAccessToken('token');
    }

    async getAllRequests(){
        const token = this.tokenAccess;
        return await parkingApi.get('request/all', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }

    async updateRequest(reqId:string, data:{status: string}){
        const token = this.tokenAccess;
        return await parkingApi.put(`request/update-request/${reqId}`, data, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
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
