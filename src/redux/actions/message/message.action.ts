import {PayloadAction} from '@reduxjs/toolkit';
import {InitialStateMessage} from '../../../types/pages/Message/Message.ts';

const getMessagesAction = (state:InitialStateMessage, action:PayloadAction<InitialStateMessage>) => {
    state.messages = action.payload.messages;
    state.usersInChat = action.payload.usersInChat;
};



export {getMessagesAction};
