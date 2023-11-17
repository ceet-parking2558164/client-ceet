import {Add,  Home, QrCode, AccountBox} from '@mui/icons-material';
import {MenuUser} from '../../types/menu/MenuUser.ts';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {routesGlobals, routesUser} from '../constants/routes.ts';

const listMenuUser:MenuUser[] = [
    {
        item: 'Inicio',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={Home} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}/user/`
    },
    {
        item: 'Perfil',
        icon: <CustomItemIcon Icon={AccountBox} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}/user${routesGlobals.PROFILE}`
    },
    {
        item: 'Qr vehiculo',
        icon: <CustomItemIcon Icon={QrCode} sxStyles={{fontSize: 40}} />,
        route: `${routesGlobals.ROOT}/user${routesUser.QR_VEHICLE}`
    },
    {
        item: 'Registrae vehiculo',
        icon: <CustomItemIcon Icon={Add} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}/user${routesUser.REGISTER_VEHICLE}`
    }
];

export {listMenuUser};
