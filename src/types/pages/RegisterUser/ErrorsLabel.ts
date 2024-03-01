import {FieldError} from 'react-hook-form';

interface ErrorList {
    key: string,
    type: string
}
interface ErrorFormUser {
    key: string,
    hashError: boolean,
    message?: string | FieldError | undefined;
}




export type {ErrorList, ErrorFormUser};
