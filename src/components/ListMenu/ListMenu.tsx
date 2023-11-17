import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {FC} from 'react';
import {ListUser} from '../../types/menu/MenuUser.ts';
import {NavLink} from 'react-router-dom';

const ListMenu: FC<ListUser> = ({list}) => {

    return (
        <Box sx={{width: '100%', pt: 10}}>
            <List>
                {
                    list.map((item) => (
                        <ListItem key={item.item} sx={{mt: 2, mb: 2}}>
                            <NavLink to={item.route}
                                     style={({isActive}) => {
                                         return {
                                             color: 'black',
                                             textDecoration: 'none',
                                             width: '100%',
                                             backgroundColor: isActive ? 'rgba(255,248,236,0.21)' : '',
                                         };
                                     }}
                            >
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
