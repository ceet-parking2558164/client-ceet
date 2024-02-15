import {User} from '../Response/User.ts';

interface InitialStateVehicle {
    vehicle_id: string,
    model: string,
    carPlate: string,
    cylinderCapacity: string,
    color: string,
    typeBicycle: null | string,
    images: string[]
    brand: string
    serial: null | string,
    createdAt: string,
    updatedAt: string,
    user_id: string,
    typeVehicle_id: string,
    User: User
}
interface Vehicles {
    vehicles: InitialStateVehicle[] | []
}

export type {InitialStateVehicle, Vehicles};