import {MenuUser} from '../../types/utils/menu/MenuUser.ts';
import {CustomItemIcon} from '../../common/atoms/CustomItemIcon.tsx';
import {PersonAddAlt} from '@mui/icons-material';
import { routesGlobals} from '../constants/routes.ts';

const listMenuSecurity:MenuUser[] = [
    {
        item: 'Scannear codigo QR',
        icon: <CustomItemIcon sx={{width: '100%'}} Icon={PersonAddAlt} sxStyles={{fontSize: 40}}/>,
        route: `${routesGlobals.ROOT}/security/scanner`
    },
];

export {listMenuSecurity};