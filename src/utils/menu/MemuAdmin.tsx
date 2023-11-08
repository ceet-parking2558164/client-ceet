import {MenuUser} from "../../types/menu/MenuUser.ts";
import {CustomItemIcon} from "../../common/atoms/CustomItemIcon.tsx";
import {Home, Dashboard, PersonAddAlt, CarRepair, AccountBox} from "@mui/icons-material";
import {routesPublics, routesGlobals, routeAdmin} from "../constants/routes.ts";

const listMenuAdmin:MenuUser[] = [
    {
        item: 'Inicio',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={Home} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}/admin`
    },
    {
        item: 'Perfil',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={AccountBox} sxStyles={{fontSize: 40}}/>,
        route:  `${routesGlobals.ROOT}/admin${routesGlobals.PROFILE}`
    },
    {
        item: 'Movimientos',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={Dashboard} sxStyles={{fontSize: 40}}/>,
        route: routesPublics.HOME
    },
    {
        item: 'Registrar usuarios',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={PersonAddAlt} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}/admin${routeAdmin.REGISTER_USER}`
    },
    {
        item: 'Gestionar plaza',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={CarRepair} sxStyles={{fontSize: 40}}/>,
        route: routesPublics.HOME
    },
]

export {listMenuAdmin}

