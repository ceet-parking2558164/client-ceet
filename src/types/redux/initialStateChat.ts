import {User} from '../Response/User.ts';


interface InitialStateChat {
    chats:  Chats[]
}

interface Chats {
    chat_id: string
    admin_id?: string
    user_id?: string,
    status_chat?: boolean,
    createdAt: string,
    updatedAt?: string,
    userId: User
}

export type {InitialStateChat, Chats};
