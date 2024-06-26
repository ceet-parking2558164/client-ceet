import {ChangeEvent} from 'react';

interface CardImageVehicleProps {
    id:number,
    description: string,
    handleFile: (e:ChangeEvent<HTMLInputElement>, id:number) => void,
    image?: string
    type: boolean
}


export type {CardImageVehicleProps};
