import {createSlice} from '@reduxjs/toolkit';
import {deleteChatAction, getAllChatAction} from '../actions/chat/chat.action.ts';
import {InitialStateChat} from '../../types/redux/initialStateChat.ts';

const initialState: InitialStateChat = {
    chats: []
};


const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        getChats: getAllChatAction,
        deleteChat: deleteChatAction
    }
});


export const {getChats, deleteChat} = chatSlice.actions;
export {chatSlice};
