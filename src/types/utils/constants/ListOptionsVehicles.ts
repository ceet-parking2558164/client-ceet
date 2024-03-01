interface ListOptionsVehicles {
    typeVehicle_id: string,
    nameType: string
}

interface InitialStateTypeVehicles {
    typesVehicles: ListOptionsVehicles[]
}

export type {ListOptionsVehicles, InitialStateTypeVehicles};
