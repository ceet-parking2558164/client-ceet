import {ResponseUser} from '../form/User.ts';

interface Data {
    token?: string,
    user?: ResponseUser | null
}

export type {Data};
