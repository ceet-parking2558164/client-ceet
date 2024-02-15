import {parkingApi} from '../../api/parkingApi.ts';
import {getAccessToken} from '../../utils/auth/localStorage.ts';

class MessageService {
    private readonly tokenAccess;

    constructor() {
        this.tokenAccess = getAccessToken('token');
    }
    async getAllMessages(chatId:string){
        const token = getAccessToken('token');
        return await parkingApi.get(`message/${chatId}`,{
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
    async getMessagesIsRead(){
        const token = getAccessToken('token');
        return await parkingApi.get('/message/msg_is_read', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
    async updateMessage(chatId:string){
        const token = getAccessToken('token');
        return await parkingApi.put(`/message/read/${chatId}`, {}, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            }
        });
    }
    async totalMessages(){
        return await parkingApi.get('message/total',{
            headers: {
                Authorization: `Bearer ${this.tokenAccess?.token}`
            }
        });
    }
}

export {MessageService};

