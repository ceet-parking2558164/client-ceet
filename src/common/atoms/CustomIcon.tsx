import {FC} from "react";
import {CustomIconProps} from "../../types/atoms/CustomIconProps.ts";
import {IconButton} from "@mui/material";

const CustomIcon:FC<CustomIconProps> = ({Icon, sxStyles, ...rest}) => {
    return (
        <IconButton {...rest} >
            <Icon sx={sxStyles} />
        </IconButton>
    );
};

export {CustomIcon};
