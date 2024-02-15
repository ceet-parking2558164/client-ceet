interface ResponseUser {
    user_id?: string,
    firstName: string,
    lastName: string,
    imageProfile: null,
    phoneNumber: string,
    email: string,
    rol: string
    password?: string
}

interface User extends ResponseUser{
    password?: string,
    documentType?: string,
    numberDocument?: string,
}

export type {User, ResponseUser};
