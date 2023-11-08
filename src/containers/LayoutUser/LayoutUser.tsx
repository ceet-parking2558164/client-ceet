import {FC, ReactNode} from "react";
import {Grid} from "@mui/material";
import {SidebarMenu} from "../../components/sidbarMenu/SidebarMenu.tsx";
import {ListMenu} from "../../components/ListMenu/ListMenu.tsx";
import {ListUser} from "../../types/menu/MenuUser.ts";

interface Interface extends ListUser{
    children:ReactNode,
}
const LayoutUser:FC<Interface> = ({children,list}) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <SidebarMenu>
                    <ListMenu list={list} />
                </SidebarMenu>
            </Grid>
            <Grid item xs={10} sx={{mt: 2}}>
                {children}
            </Grid>
        </Grid>
    );
};

export {LayoutUser};
