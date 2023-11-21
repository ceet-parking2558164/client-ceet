import {FC} from 'react';
import {Box, Typography} from '@mui/material';
import {ModalErrorProps} from '../../types/components/ModalError.ts';
import {styleContainer, styleLi} from './ModalError.styles.ts';

const ModalError:FC<ModalErrorProps> = ({formValidate}) => {

    const seeModal = formValidate.some(err => err.hashError);

    return (
        <>
            {
                seeModal && (
                    <Box sx={styleContainer}>
                        <li style={styleLi}>
                            {
                                formValidate.map(error => (
                                    error.hashError && (
                                        <Typography key={error.key} sx={{color: '#000000'}}>{error.message}</Typography>
                                    )
                                ))
                            }
                        </li>
                    </Box>
                )
            }
        </>
    );
};

export {ModalError};
