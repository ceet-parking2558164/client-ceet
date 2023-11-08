import {SxProps} from "@mui/material";

interface QrImage {
    containerMain:SxProps
}

const styleSx:QrImage = {
    containerMain: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 3,
        gap: 3
    }
}

export {styleSx}
