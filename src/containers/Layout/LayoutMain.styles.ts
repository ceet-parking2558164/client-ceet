import {SxProps} from "@mui/material";
import {theme} from "../../theme/theme.ts";

const layoutStyle:SxProps = {
    width: '100%',
    overflowY: 'hidden',
    height: `calc(100vh - 96px);`,
    zIndex: 0,
    bgcolor: theme.palette.primary.light,
    pt: 12
}

export {layoutStyle}
