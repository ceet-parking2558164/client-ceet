import {FC} from "react";
import {Box} from "@mui/material";
import {ChildrenProps} from "../../types/children/ChildrenProps.ts";
import {layoutStyle} from "./LayoutMain.styles.ts";

const LayoutMain:FC<ChildrenProps> = ({children}) => {
    return (
        <Box sx={layoutStyle}>
            {children}
        </Box>
    );
};

export {LayoutMain};
