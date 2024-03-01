import {RoutesApp, RoutesUser, RoutesGlobals, RoutesAdmin} from '../../types/routes/RoutesApp.ts';

const routesPublics:RoutesApp = {
    HOME: '/',
    LOGIN: '/login-user',
    RECOVERY: '/recovery-password',
    RESET: '/new-password'
};

const routesGlobals:RoutesGlobals = {
    ROOT: '/welcome-system',
    PROFILE: 'profile',
    CHAT: 'chats',
    MESSAGE: 'messages'
};

const routesUser:RoutesUser = {
    QR_VEHICLE: '/qr-vehicle',
    REGISTER_VEHICLE: '/register-vehicle'
};
const routesAdmin:RoutesAdmin = {
    REGISTER_USER: '/register-user',
    DASHBOARD: '/dashboard',
    USERS: '/all-users',
    VEHICLES: '/all-vehicles',
    REQUEST: '/request'
};
export {
    routesPublics,
    routesUser,
    routesGlobals,
    routesAdmin
};
