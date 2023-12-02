import {MessageService} from '../../../services/message/Message.service.ts';
import {AppDispatch} from '../../store/store.ts';
import {getAllMessage} from '../../reducer/message.slice.ts';

const messageMessage = new MessageService();

const getMessagesThunk = () => {
    return async function(dispatch:AppDispatch){
        try {
            const response = await messageMessage.getAllMessages();
            dispatch(getAllMessage(response.data));
        }catch (e) {
            console.error(e);
        }
    };
};

export {getMessagesThunk};
