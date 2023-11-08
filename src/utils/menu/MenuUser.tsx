import {Add,  Home, QrCode, AccountBox} from "@mui/icons-material";
import {MenuUser} from "../../types/menu/MenuUser.ts";
import {routesUser, routesGlobals} from "../constants/routes.ts";
import {CustomItemIcon} from "../../common/atoms/CustomItemIcon.tsx";

const listMenuUser:MenuUser[] = [
    {
        item: 'Inicio',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={Home} sxStyles={{fontSize: 40}}/>,
        route: routesGlobals.ROOT
    },
    {
        item: 'Perfil',
        icon: <CustomItemIcon Icon={AccountBox} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}${routesGlobals.PROFILE}`
    },
    {
        item: 'Qr vehiculo',
        icon: <CustomItemIcon Icon={QrCode} sxStyles={{fontSize: 40}} />,
        route: `${routesGlobals.ROOT}${routesUser.QR_VEHICLE}`
    },
    {
        item: 'Registrae vehiculo',
        icon: <CustomItemIcon Icon={Add} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}${routesUser.REGISTER_VEHICLE}`
    }
]

export {listMenuUser}
