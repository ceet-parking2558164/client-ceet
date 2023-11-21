import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {FC} from 'react';
import {ListUser} from '../../types/utils/menu/MenuUser.ts';
import {NavLink} from 'react-router-dom';
import {AccountBox, Home} from '@mui/icons-material';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {routesGlobals} from '../../utils/constants/routes.ts';
import {styleNavLink} from './ListMenu.styles.ts';

const ListMenu: FC<ListUser> = ({list}) => {

    return (
        <Box sx={{width: '100%', pt: 10}}>
            <List>
                <ListItem sx={{mt: 2, mb: 2}}>
                    <NavLink to={`${routesGlobals.ROOT}/`} style={({isActive}) => styleNavLink(isActive)}>
                        <ListItemButton>
                            <ListItemIcon>
                                <CustomItemIcon sx={{width: '100%'}} Icon={Home} sxStyles={{fontSize: 40}}/>,
                            </ListItemIcon>
                            <ListItemText>Inicio</ListItemText>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem sx={{mt: 2, mb: 2}}>
                    <NavLink to={`${routesGlobals.ROOT}/${routesGlobals.PROFILE}`} style={({isActive}) => styleNavLink(isActive)}>
                        <ListItemButton>
                            <ListItemIcon>
                                <CustomItemIcon sx={{width: '100%'}} Icon={AccountBox} sxStyles={{fontSize: 40}}/>,
                            </ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                {
                    list.map((item) => (
                        <ListItem key={item.item} sx={{mt: 2, mb: 2}}>
                            <NavLink to={item.route} style={({isActive}) => styleNavLink(isActive)}>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.item}</ListItemText>
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};


export {ListMenu};
