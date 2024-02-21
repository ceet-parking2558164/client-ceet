interface User {
    firstName: string
    lastNAme: string
    imageProfile: string
}
interface Chat {
    user_id: string,
    admin_id: string
}

type MessageUser = {
    User: User
    chat_id?: string
    createdAt: string
    message: string,
    is_read: boolean
    message_id?: string
    type:string
    updatedAt?: string
    user_id?: string
    Chat: Chat
}
interface TotalMessages {
    total: number
}
interface Message {
    messages: MessageUser[]
    total: number
}



export type {Message, MessageUser, TotalMessages};
