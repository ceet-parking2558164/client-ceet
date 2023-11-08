import {CSSProperties} from "react";
import {SxProps} from "@mui/material";

interface StyleSx {
    inputCustom: SxProps,
    buttonCustom: SxProps
}

const styleFormReset:CSSProperties = {
    padding: '60px 10px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 4px rgba(2,2,0,0.5)',
    borderRadius: 3,
    gap: 20
}
const sxReset:StyleSx = {
    inputCustom: {
        width: '100%'
    },
    buttonCustom: {
        width: '100%'
    }
}
export {styleFormReset, sxReset}
