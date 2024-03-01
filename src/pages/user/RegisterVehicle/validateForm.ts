import {FieldErrors} from 'react-hook-form';
import {ErrorList} from '../../../types/pages/RegisterUser/ErrorsLabel.ts';

const optionErrorsForm = {
    optTypeVehicle: {required: '* Debes ingresar un tipo de vehiculo'},
    optCylinderCapacity: {required: '* Debes ingresa el cilindraje' },
    optMarca: {required: '* Debes ingresa la marca' },
    optModel: {required: '* Debes ingresa el modelo' },
    optCarPlate: {required: '* Debes ingresa la placa' },
    optColor: {required: '* Debes ingresa el color' },
    optBrand: {required: '* Debes ingresa la marca' },
    optSerial: {required: '* Debes ingresar el serial' },
    optTypeBicycle: {required: '* Debes ingresar el tipo de cicla' },
};

const validateFormVehicle = (errors:FieldErrors) => {
    const errorList:ErrorList[] = [
        {key: 'model', type: 'required'},
        {key: 'carPlate', type: 'required'},
        {key: 'cylinderCapacity', type: 'required'},
        {key: 'color', type: 'required'},
        {key: 'TypeVehicleId', type: 'required'},
        {key: 'brand', type: 'required'},
        {key: 'serial', type: 'required'},
        {key: 'typeBicycle', type: 'required'}
    ];

    return errorList.map(error => ({
        key: error.key,
        hashError: errors[error.key]?.type === error.type,
        message: String(errors[error.key]?.message)
    }));
};


export {optionErrorsForm, validateFormVehicle};
