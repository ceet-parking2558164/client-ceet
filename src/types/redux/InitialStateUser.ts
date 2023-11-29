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
    loading?: boolean
}


export type {InitialStateUser, Token, Users};
