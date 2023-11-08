import {RoutesApp, RoutesUser, RoutesGlobals, RoutesAdmin} from "../../types/routes/RoutesApp.ts";

const routesPublics:RoutesApp = {
    HOME: '/',
    LOGIN: '/login-user',
    RECOVERY: '/recovery-password',
    RESET: '/reset-password'
}

const routesGlobals:RoutesGlobals = {
    ROOT: '/welcome-system-user',
    PROFILE: '/profile'
}

const routesUser:RoutesUser = {
    QR_VEHICLE: '/qr-vehicle-user',
    REGISTER_VEHICLE: '/register-vehicle'
}
const routeAdmin:RoutesAdmin = {
    REGISTER_USER: '/register-user',
    MESSAGE: '/message'
}
export {
    routesPublics,
    routesUser,
    routesGlobals,
    routeAdmin
}
