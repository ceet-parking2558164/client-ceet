import {Add, QrCode} from '@mui/icons-material';
import {MenuUser} from '../../types/menu/MenuUser.ts';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {routesGlobals, routesUser} from '../constants/routes.ts';

const listMenuUser:MenuUser[] = [
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
