import {FieldErrors} from 'react-hook-form';
import {ErrorList, ErrorFormUser} from '../../../types/pages/RegisterUser/ErrorsLabel.ts';

const optionsLabelErrors= {
    optFirstName: {required: '* El nombre es requerido'},
    optLastName: {required: '* El apellido es requerido'},
    optDocumentType: {required: '* Debes ingresar un tipo de documento'},
    optRol: {required: '* Debes ingresar un role',},
    optNumberDocument: {
        required: '* El numero de documento es requerido',
        pattern: {
            value: /^[0-9]+$/,
            message: '* El numero de documento solo debe contener numeros'
        }
    },
    optPhoneNumber: {
        required: '* El numero de celular es requerido',
        pattern: {
            value: /^[0-9]+$/,
            message: '* EL numero de telefono solo debe contener numeros'
        },
        minLength: {
            value: 10,
            message: '* El numero de celular debe contener 10 digitos',
        },
        maxLength: {
            value: 10,
            message: '* El numero de celular debe contener 10 digitos',
        }
    },
    optEmail: {
        required: '* EL email es requerido',
        pattern: {
            value: /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '* El email no cumple con las caracteristicas de un correo'
        }
    },
    optPassword: {
        required: '* El password es requerido',
        minLength: {
            value: 8,
            message: '* La contraseña debe tener al menos 8 caracteres',
        },
        maxLength: {
            value: 12,
            message: '* La contraseña debe tener menos de 12 caracteres',
        }
    }
};

const validateForm = (errors:FieldErrors):ErrorFormUser[] => {
    const errorList:ErrorList[] = [
        { key: 'email', type: 'required'},
        { key: 'email', type: 'pattern' },
        { key: 'firstName', type: 'required' },
        { key: 'lastName', type: 'required' },
        { key: 'documentType', type: 'required' },
        { key: 'numberDocument', type: 'required'},
        { key: 'numberDocument', type: 'pattern' },
        { key: 'password', type: 'required' },
        { key: 'password', type: 'minLength' },
        { key: 'password', type: 'maxLength' },
        { key: 'phoneNumber', type: 'required'},
        { key: 'phoneNumber', type: 'pattern'},
        { key: 'rol', type: 'required' },
    ];

    return errorList.map(error => ({
        key: error.key,
        hashError: errors[error.key]?.type === error.type,
        message: String(errors[error.key]?.message)
    }));

};

export {validateForm, optionsLabelErrors};
