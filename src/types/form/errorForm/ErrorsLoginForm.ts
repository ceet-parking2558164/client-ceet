interface ErrorsLoginForm {
    errorEmail: boolean,
    errorPattern: boolean,
    errorPassword: boolean,
    errorMinPassword: boolean,
    errorMaxPassword: boolean
}

interface ErrorsFormRecovery {
    errorEmail: boolean,
    errorPattern: boolean,
}

interface NewPassword {
    errorPassword: boolean,
    errorMinPassword: boolean,
    errorMaxPassword: boolean,
    errorNewPassword: boolean
    errorMinNewPassword: boolean,
    errorMaxNewPassword: boolean,
}

export type {ErrorsLoginForm, ErrorsFormRecovery, NewPassword};
