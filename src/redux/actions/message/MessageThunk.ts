import {MessageService} from '../../../services/message/Message.service.ts';
import {AppDispatch} from '../../store/typeState.ts';
import {getAllMessage} from '../../reducer/message.slice.ts';


const messageMessage = new MessageService();

const getMessagesThunk = (chatId:string) => {
    return async function(dispatch:AppDispatch){
        try {
            const response = await messageMessage.getAllMessages(chatId);
            dispatch(getAllMessage(response.data));
        }catch (e) {
            console.error(e);
        }
    };
};

const getMessagesIsRead = async() => {
    try {
        const response  = await messageMessage.getMessagesIsRead();
        if (response.status){
            return response.data;
        }
    }catch (e) {
        console.error(e);
    }
};



export {getMessagesThunk, getMessagesIsRead};
