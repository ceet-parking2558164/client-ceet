import {createSlice} from '@reduxjs/toolkit';
import {Message} from '../../types/pages/Message/Message.ts';
import {getMessagesAction} from '../actions/message/message.action.ts';

const initialState:Message = {
    message: []
};

const messageSlice = createSlice({
   name: 'message',
   initialState,
   reducers:{
       getAllMessage: getMessagesAction
   }
});

export const {getAllMessage} = messageSlice.actions;
export {messageSlice};
