import { FieldValues } from 'react-hook-form';
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

    async sendMessage(dataMessage:FieldValues){
        const token = getAccessToken('token');
        return await parkingApi.post('/message/send', dataMessage, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
    }
}

export {MessageService};


