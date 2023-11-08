import {theme} from "../../theme/theme.ts";
import {SxProps} from "@mui/material";
import {CSSProperties} from "react";
interface HeaderStyles {
    boxImage: SxProps,
    styleBadge: SxProps,
    boxIcon: SxProps,
    avatar: SxProps,
    iconsMail: SxProps,
    iconsHome: SxProps,
    textLogin: SxProps
}

interface Header {
    header: CSSProperties,
    image: CSSProperties
}
const styleGlobal:HeaderStyles = {
    boxImage: {
        ml: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    styleBadge: {
        '& .MuiBadge-badge': {
            right: 13,
            top: 12,
        }
    },
    boxIcon: {
        display: 'flex',
        mr: 5,
        gap: 2,
        borderRight: 3,
        pr: 5
    },
    avatar: {
        width: 70,
        height:70,
        cursor: 'pointer',
        ml: 5
    },
    iconsMail: {
        width: 40,
        height: 40,
        color: theme.palette.primary.light
    },
    iconsHome: {
        width: 45,
        height: 45,
        color: theme.palette.primary.light
    },
    textLogin: {
        cursor: 'pointer',
        transition: 'transform 0.2s, font-size 0.2s',
        '&:hover': {
            transform: 'scale(1.2)',
        }
    }
}

const styleHeader:Header ={
    header: {
        width: '100%',
        height: 100,
        backgroundColor: theme.palette.primary.main,
        padding: 3,
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0
    },
    image: {
        width: '70px',
        height: '70px'
    },
}


export {styleGlobal, styleHeader}


