import {MouseEvent, useState} from 'react';
import {Avatar, Badge, Box, Hidden, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {Home, Mail, Menu} from '@mui/icons-material';
import {CustomIcon} from '../../common/atoms/CustomIcon.tsx';
import {routesGlobals, routesPublics} from '../../utils/constants/routes.ts';
import {styleGlobal, styleHeader} from './Header.styles.ts';
import {stylesLink} from '../../styles/links.styles.ts';
import logoSena from '../../assets/logo_sena.png';
import {useAppSelector} from '../../hooks/useAppRedux.ts';
import {MenuHeader} from '../../common/molecules/MenuHeader/MenuHeader.tsx';


const Header = () => {


    const userAuth = useAppSelector(state => state.auth.user);

    const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);

    const handleMenu = (e: MouseEvent<HTMLElement>) => {
        setAnchorMenu(e.currentTarget);
    };


    return (
        <header style={styleHeader.header}>
            <Hidden lgDown>
                <Box sx={styleGlobal.boxImage}>
                    <img style={styleHeader.image} src={logoSena} alt="logo sena"/>
                </Box>
            </Hidden>
            <Hidden lgUp>
                <Box sx={styleGlobal.boxImage}>
                    <Menu sx={{fontSize: 50}}/>
                </Box>
            </Hidden>
            <Box sx={{mr: 10, display: 'flex', alignItems: 'center'}}>
                <Hidden lgDown>
                    {
                        userAuth && (
                            <Box sx={styleGlobal.boxIcon}>
                                <Link to={`${routesGlobals.ROOT}/admin/message`}>
                                    <CustomIcon Icon={Home} sxStyles={styleGlobal.iconsHome}/>
                                    <Badge badgeContent={1} color='secondary' sx={styleGlobal.styleBadge}>
                                        <CustomIcon Icon={Mail} sxStyles={styleGlobal.iconsMail}/>
                                    </Badge>
                                </Link>
                            </Box>
                        )
                    }
                    {
                        !userAuth ? (
                            <Link to={routesPublics.LOGIN} style={stylesLink}>
                                <Typography variant='h6' sx={styleGlobal.textLogin}>Iniciar sesion</Typography>
                            </Link>
                        ) : <Typography variant='h6' sx={styleGlobal.textLogin}>
                            {`${userAuth.firstName} ${userAuth.lastName}`}
                        </Typography>
                    }
                </Hidden>
                {
                    userAuth && (
                        <>
                            <Avatar sx={styleGlobal.avatar} onClick={handleMenu}/>
                            <MenuHeader anchor={anchorMenu} setAnchor={setAnchorMenu}/>
                        </>
                    )
                }
            </Box>
        </header>
    );
};

export {Header};
