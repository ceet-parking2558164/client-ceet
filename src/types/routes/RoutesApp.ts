interface RoutesApp {
    HOME: string
    LOGIN: string
    RECOVERY: string
    RESET: string
}

interface RoutesGlobals {
    ROOT: string,
    PROFILE: string
}

interface RoutesAdmin {
    REGISTER_USER: string
    MESSAGE: string
}

interface RoutesUser {
    QR_VEHICLE: string,
    REGISTER_VEHICLE: string
}

export type {RoutesApp, RoutesUser, RoutesGlobals, RoutesAdmin}
