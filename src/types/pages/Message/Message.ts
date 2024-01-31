import {ResponseUser} from '../../Response/User.ts';

type MessageUser = {
    User: ResponseUser
    chat_id?: string
    createdAt: string
    message: string
    message_id?: string
    type:string
    updatedAt?: string
    user_id?: string
}
interface TotalMessages {
    total: number
}
interface Message {
    messages: MessageUser[]
    total: number
}



export type {Message, MessageUser, TotalMessages};
