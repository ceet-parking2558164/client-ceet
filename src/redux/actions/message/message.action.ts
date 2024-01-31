import {PayloadAction} from '@reduxjs/toolkit';
import {Message, MessageUser, TotalMessages} from '../../../types/pages/Message/Message.ts';

const getMessagesAction = (state:Message, action:PayloadAction<MessageUser[]>) => {
    state.messages = action.payload;
};

const totalMessagesAction = (state:Message, action:PayloadAction<TotalMessages>) => {
    state.total = action.payload.total;
};

export {getMessagesAction, totalMessagesAction};
