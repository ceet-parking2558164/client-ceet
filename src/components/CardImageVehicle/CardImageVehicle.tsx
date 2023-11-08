import {Box, Typography} from "@mui/material";
import {CustomButton} from "../../common/atoms/CustomButton.tsx";
import {styleSx, styleImage} from "./CardImageVehicle.styles.ts";
import {CardImageVehicleProps} from "../../types/components/CardImageVehicle.ts";
import {FC, useRef} from "react";

const CardImageVehicle:FC<CardImageVehicleProps> = (props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }
    return (
        <>
            <Typography  variant='subtitle1'>Fotografia No: {props.id}: <br/> {props.description}</Typography>
            <Box sx={styleSx.boxImage}>
                {
                    props.image && (
                        <img style={styleImage} src={props.image} alt="image"/>
                    )
                }
            </Box>
            <CustomButton
                sx={styleSx.button}
                textValue='Elegir archivo'
                onClick={openFileDialog}
                variant='contained'
            />
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={(e) => props.handleFile(e, props.id)}
            />
        </>
    );
};

export {CardImageVehicle}
