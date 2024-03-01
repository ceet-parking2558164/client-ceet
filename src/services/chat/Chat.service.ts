import {parkingApi} from '../../api/parkingApi.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';

class ChatService {

    private readonly tokenAccess;

    constructor() {
        this.tokenAccess = getAccessToken('token');
    }

    async getAllChats(){
        const token = getAccessToken('token');
        return await parkingApi.get('chats', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }

    async deleteChatById(chatId:string){
        const token = this.tokenAccess;
        return await parkingApi.delete(`chats/remove/${chatId}`, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
}

export {ChatService};
