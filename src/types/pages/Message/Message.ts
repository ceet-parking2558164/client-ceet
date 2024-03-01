interface User {
    firstName: string
    lastName: string
    imageProfile: string
    user_id: string
}
interface Chat {
  admin_id: string;
  userId: User;
  adminId: User;
}
interface Message {
  message_id?: string
  message: string;
  type: string;
  chat_id?: string;
  user_id?: string;
  is_read?: string;
  createdAt: string;
  updatedAt?: string;
}


interface InitialStateMessage {
  messages: Message[];
  usersInChat: Chat|null
}





export type {Message, InitialStateMessage};
