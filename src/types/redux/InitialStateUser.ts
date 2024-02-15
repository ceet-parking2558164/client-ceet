import {ResponseUser} from '../Response/User.ts';

interface InitialStateUser {
    user: ResponseUser | null,
    loading: boolean
}

interface Token {
    token: string | undefined
}


interface  Users {
    users: ResponseUser[] | null,
    copyUsers: ResponseUser[] | null | undefined,
    loading?: boolean,
    selectRole: string
}


export type {InitialStateUser, Token, Users};
