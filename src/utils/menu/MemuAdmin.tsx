import {MenuUser} from '../../types/utils/menu/MenuUser.ts';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {Dashboard, PersonAddAlt} from '@mui/icons-material';
import { routesGlobals, routesAdmin} from '../constants/routes.ts';

const listMenuAdmin:MenuUser[] = [
    {
        item: 'Movimientos',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={Dashboard} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}/admin${routesAdmin.DASHBOARD}`
    },
    {
        item: 'Registrar usuarios',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={PersonAddAlt} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}/admin${routesAdmin.REGISTER_USER}`
    },
];

export {listMenuAdmin};

