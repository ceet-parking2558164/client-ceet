import {PayloadAction} from '@reduxjs/toolkit';
import {Message, MessageUser} from '../../../types/pages/Message/Message.ts';

const getMessagesAction = (state:Message, action:PayloadAction<MessageUser[]>) => {
    state.message = action.payload;
};

export {getMessagesAction};
