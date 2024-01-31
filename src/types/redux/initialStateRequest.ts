import {User} from '../Response/User.ts';

interface RequestVehicle {
    request_id: string,
    user_id: string,
    vehicle_id: string,
    status: string,
    date_request: null,
    createdAt: string,
    updatedAt: string,
    User: User,
    Vehicle: {
        vehicle_id: string,
        model: string,
        carPlate: string,
        cylinderCapacity: string,
        color: string,
        typeBicycle: null,
        images: string[],
        brand: string,
        serial: null,
        createdAt: string,
        updatedAt: string,
        user_id: string,
        typeVehicle_id: string
    }
}

interface InitialStateRequest {
    requests: RequestVehicle
}

export type {InitialStateRequest, RequestVehicle};
