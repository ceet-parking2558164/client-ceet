import {Chats, InitialStateChat} from '../../../types/redux/initialStateChat.ts';
import {PayloadAction} from '@reduxjs/toolkit';


const getAllChatAction = (state:InitialStateChat, action:PayloadAction<Chats[]>) => {
    state.chats = action.payload;
};

const deleteChatAction = (state:InitialStateChat, action:PayloadAction<string>) => {
    state.chats = state.chats.filter(chat => chat.chat_id !== action.payload);
};

export {getAllChatAction, deleteChatAction};
