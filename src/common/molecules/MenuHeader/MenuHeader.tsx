import {FC} from 'react';
import {Menu, MenuItem} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../../hooks/useRedux/useAppRedux.ts';
import {logout} from '../../../redux/reducer/auth.slice.ts';
import {routesGlobals} from '../../../utils/constants/routes.ts';

interface MenuProps {
    anchor: null | HTMLElement,
    setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>
}

const MenuHeader: FC<MenuProps> = (props) => {
    const {anchor, setAnchor} = props;

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const handleClose = () => {
        setAnchor(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        setAnchor(null);
        navigate('/');

    };
    return (
        <Menu
            id='Menu-header'
            anchorEl={anchor}
            open={Boolean(anchor)}
            anchorOrigin={{
                vertical: 90,
                horizontal: 'right'
            }}
            onClose={handleClose}
        >
            <Link to={`${routesGlobals.ROOT}/admin${routesGlobals.PROFILE}`}
                  style={{textDecoration: 'none', color: 'black'}}>
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem>
        </Menu>
    );
};

export {MenuHeader};
