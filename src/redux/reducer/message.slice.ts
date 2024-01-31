import {createSlice} from '@reduxjs/toolkit';
import {Message} from '../../types/pages/Message/Message.ts';
import {getMessagesAction, totalMessagesAction} from '../actions/message/message.action.ts';

const initialState:Message = {
    messages: [],
    total: 0
};

const messageSlice = createSlice({
   name: 'messages',
   initialState,
   reducers:{
       getAllMessage: getMessagesAction,
       totalMessages: totalMessagesAction
   }
});

export const {getAllMessage, totalMessages} = messageSlice.actions;
export {messageSlice};
