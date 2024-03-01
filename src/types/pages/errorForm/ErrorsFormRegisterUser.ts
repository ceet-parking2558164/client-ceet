interface ErrorsFormRegisterUser {
    errorFirstName: boolean,
    errorLastName: boolean
    errorPassword: boolean,
    errorDocumentType: boolean,
    errorNumberDocument: boolean,
    errorPhoneNumber: boolean,
    errorEmail: boolean,
    errorRol: boolean
    errorPatternEmail: boolean,
    errorIsNumber: boolean
    errorMinPassword: boolean,
    errorMaxPassword: boolean,
    errorMinPhone: boolean,
    errorMaxPhone: boolean,
    errorMaxDocumentNumber: boolean
    errorMinDocumentNumber: boolean
}

export type {ErrorsFormRegisterUser};
