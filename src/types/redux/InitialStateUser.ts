import {ResponseUser} from '../pages/form/User.ts';

interface InitialStateUser {
    user: ResponseUser | null,
    loading: boolean
}

interface Token {
    token: string | undefined
}



export type {InitialStateUser, Token};
