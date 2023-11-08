import {SxProps} from "@mui/material";
import {CSSProperties} from "react";

interface FormProfile  {
    title:SxProps,
    boxAvatar:SxProps,
    boxInputs:SxProps,
    boxInputPar:SxProps
    iconCamera:SxProps,

}


const styleSx:FormProfile = {
    title: {
        display: 'flex',
        justifyContent: 'center'
    },
    boxAvatar: {
        justifyContent: 'center',
        display: 'flex',
        p:3,
        position: 'relative'
    },
    boxInputs: {
        display: 'flex',
        gap: 3,
        flexDirection: 'column'
    },
    boxInputPar: {
        display: 'flex',
        gap: 2
    },
    iconCamera: {
        position: 'absolute',
        bottom: 50,
        right: 500,
        opacity: 0.5,
        cursor: 'pointer'
    }
}

const stylesForm:CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

export {stylesForm, styleSx}
