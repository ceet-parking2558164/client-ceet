interface User {
    firstName: string
    lastName: string,
    user_id?: string,
    imageProfile: string | null,
}


interface InitialStateChat {
    chats:  Chats[]
}

interface Chats {
    chat_id: string
    admin_id?: string
    user_id?: string,
    createdAt: string,
    updatedAt?: string,
    userId: User
    adminId: User
}

interface ComponentListChat extends User {
  chat_id: string;
  createdAt: string
}

export type {InitialStateChat, ComponentListChat, Chats};