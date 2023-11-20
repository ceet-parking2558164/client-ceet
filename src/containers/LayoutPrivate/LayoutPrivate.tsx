import {FC} from 'react';
import {Grid} from '@mui/material';
import {SidebarMenu} from '../../components/sidbarMenu/SidebarMenu.tsx';
import {ListMenu} from '../../components/ListMenu/ListMenu.tsx';
import {ListUser} from '../../types/menu/MenuUser.ts';
import {StylesSx} from './LayoutPrivate.styles.ts';
import {ChildrenProps} from '../../types/children/ChildrenProps.ts';

interface Interface extends ListUser, ChildrenProps {
}

const LayoutPrivate: FC<Interface> = ({list, children}) => {

    return (
        <Grid container sx={StylesSx.container}>
            <Grid item xs={2}>
                <SidebarMenu>
                    <ListMenu list={list}/>
                </SidebarMenu>
            </Grid>
            <Grid item xs={10} sx={StylesSx.containerPage}>
                {children}
            </Grid>
        </Grid>
    );
};

export {LayoutPrivate};