import {AppDispatch} from '../../store/store.ts';
import {ChatService} from '../../../services/chat/Chat.service.ts';
import {deleteChat, getChats} from '../../reducer/chat.slice.ts';
import axios from 'axios';
import {ErrorCustom} from '../../../types/axios/ErrorMessage.ts';
import {alertMessage} from '../../../utils/alert/AlertMessage.ts';
import {Status} from '../../../types/utils/alert/AlertMessage.ts';

const chatService = new ChatService();

const getAllChatThunk = () => {
    return async function(dispatch:AppDispatch){
        try {
            const response = await chatService.getAllChats();
            if (response.status === 200){
                dispatch(getChats(response.data));
            }
        }catch (e) {
            console.error(e);
            if (axios.isAxiosError(e)){
                const error:ErrorCustom = e.response?.data;
                alertMessage(error ? error.message: e.message && 'Inicia el servidor', Status.error );
            }
        }
    };
};

const deleteChatThunk = (chatId:string) => {
    return async function(dispatch:AppDispatch){
        try {
            const response = await chatService.deleteChatById(chatId);
            if (response.status === 200){
                alertMessage(response.data, Status.success);
                dispatch(deleteChat(chatId));
            }
        }catch (e){
            console.error(e);
            if (axios.isAxiosError(e)){
                const error:ErrorCustom = e.response?.data;
                alertMessage(error ? error.message: e.message && 'Inicia el servidor', Status.error );
            }
        }
    };
};

export {getAllChatThunk, deleteChatThunk};
