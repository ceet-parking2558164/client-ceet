import {SxProps} from "@mui/material";


interface RegisterVehicle {
    boxDynamic:SxProps
    inputCustom: SxProps
    buttonCustom: SxProps
}


const styleSx:RegisterVehicle = {
    boxDynamic: {
        display: 'flex',
        gap: 2,
        flexDirection: 'row'
    },
    inputCustom: {
        width: '100%',
        mt: 2
    },
    buttonCustom: {
        width: '100%',
        height: '15%',
        mt: 2
    }
}

export {styleSx}
