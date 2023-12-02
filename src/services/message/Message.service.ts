import {parkingApi} from '../../api/parkingApi.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';

class MessageService {
    async getAllMessages(){
        const token = getAccessToken('token');
        return await parkingApi.get('message',{
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
}

export {MessageService};


