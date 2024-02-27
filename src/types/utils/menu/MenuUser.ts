import {ReactNode} from 'react';


interface MenuUser {
    item: string,
    icon: ReactNode,
    route: string
}

interface ListUser {
    anchor?:string
    list: MenuUser[]
}

export type {MenuUser, ListUser};
