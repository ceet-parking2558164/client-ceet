import {Avatar, Badge, Box, Typography, Hidden} from "@mui/material";
import {Link} from "react-router-dom";
import {Home, Mail, Menu} from '@mui/icons-material';
import {CustomIcon} from "../../common/atoms/CustomIcon.tsx";
import {routeAdmin, routesGlobals, routesPublics} from "../../utils/constants/routes.ts";
import {styleGlobal, styleHeader} from "./Header.styles.ts";
import {stylesLink} from "../../styles/links.styles.ts";
import logoSena from '../../assets/logo_sena.png';


const Header = () => {
    return (
        <header style={styleHeader.header}>
            <Hidden lgDown>
                <Box sx={styleGlobal.boxImage}>
                    <img style={styleHeader.image} src={logoSena} alt="logo sena"/>
                </Box>
            </Hidden>
            <Hidden lgUp>
                <Box sx={styleGlobal.boxImage}>
                    <Menu sx={{fontSize: 50}} />
                </Box>
            </Hidden>
            <Box sx={{mr: 10, display: 'flex', alignItems: 'center'}}>
                <Hidden lgDown>
                    <Box sx={styleGlobal.boxIcon}>
                        <Link to={`${routesGlobals.ROOT}/admin${routeAdmin.MESSAGE}`}>
                            <CustomIcon Icon={Home} sxStyles={styleGlobal.iconsHome} />
                            <Badge badgeContent={1} color='secondary' sx={styleGlobal.styleBadge}>
                                <CustomIcon Icon={Mail} sxStyles={styleGlobal.iconsMail}/>
                            </Badge>
                        </Link>
                    </Box>
                    <Link to={routesPublics.LOGIN} style={stylesLink}>
                        <Typography variant='h6' sx={styleGlobal.textLogin}>Iniciar sesion</Typography>
                    </Link>
                </Hidden>
                <Avatar sx={styleGlobal.avatar}/>
            </Box>
        </header>
    );
};

export {Header};


