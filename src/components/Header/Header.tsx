import {MouseEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Badge, Box, Hidden, Typography} from '@mui/material';
import {Home, Mail, Menu} from '@mui/icons-material';
import {CustomIcon} from '../../common/atoms/CustomIcon.tsx';
import {routesGlobals, routesPublics} from '../../utils/constants/routes.ts';
import {styleGlobal, styleHeader} from './Header.styles.ts';
import {stylesLink} from '../../styles/links.styles.ts';
import logoSena from '../../assets/logo_sena.png';
import {useAppSelector} from '../../hooks/useRedux/useAppRedux.ts';
import {MenuHeader} from '../../common/molecules/MenuHeader/MenuHeader.tsx';
import {socket} from '../../utils/socket/socket.ts';


const Header = () => {

    const userAuth = useAppSelector(state => state.auth.user);

    const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
    const handleMenu = (e: MouseEvent<HTMLElement>) => {
        setAnchorMenu(e.currentTarget);
    };

    useEffect(() => {

        socket?.on('notify', (num) => {
            console.log(num);
        });
    }, [socket]);

    return (
        <header style={styleHeader.header}>
            <Hidden lgDown>
                <Box sx={styleGlobal.boxImage}>
                    <Link to='/'>
                        <img style={styleHeader.image} src={logoSena} alt="logo sena"/>
                    </Link>
                </Box>
            </Hidden>
            <Hidden  lgUp>
                <Box sx={styleGlobal.boxImage}>
                    <Menu sx={{fontSize: 50}}/>
                </Box>
            </Hidden>
            <Box sx={{mr: 10, display: 'flex', alignItems: 'center'}}>
                <Hidden lgDown >
                    {
                        userAuth && (
                            <Box sx={styleGlobal.boxIcon}>
                                <Link to={`${routesGlobals.ROOT}`}>
                                    <CustomIcon Icon={Home} sxStyles={styleGlobal.iconsHome}/>
                                </Link>
                                <Link to={`${routesGlobals.ROOT}/${routesGlobals.CHAT}`}>
                                    <Badge badgeContent={0}  color='secondary' sx={styleGlobal.styleBadge}>
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
                            <Avatar sx={styleGlobal.avatar} onClick={handleMenu} src={userAuth && userAuth.imageProfile ? userAuth.imageProfile:  ''}/>
                            <MenuHeader anchor={anchorMenu} setAnchor={setAnchorMenu}/>
                        </>
                    )
                }
            </Box>
        </header>
    );
};

export {Header};
