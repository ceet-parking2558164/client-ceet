import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {InitialStateMessage, Message} from '../../types/pages/Message/Message.ts';
import {getMessagesAction} from '../actions/message/message.action.ts';

const initialState:InitialStateMessage = {
    messages: [],
    usersInChat: null
};

const messageSlice = createSlice({
   name: 'messages',
   initialState,
   reducers:{
       getAllMessage: getMessagesAction,
       addMessage: (state:InitialStateMessage, action:PayloadAction<Message>) => {
        state.messages = [...state.messages, action.payload];
       }
   }
});

export const {getAllMessage, addMessage} = messageSlice.actions;
export {messageSlice};
