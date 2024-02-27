import {SxProps} from '@mui/material';
import {CSSProperties} from 'react';
import {theme} from '../../../theme/theme.ts';

interface FormProfile  {
    title:SxProps,
    boxAvatar:SxProps,
    boxInputs:SxProps,
    boxInputPar:SxProps
    iconCamera:SxProps,
    boxInput:SxProps
    iconEdit: SxProps
}


const styleSx: FormProfile = {
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
  boxAvatar: {
    justifyContent: 'center',
    display: 'flex',
    p: 3,
    position: 'relative',
    mb:3
  },
  boxInputs: {
    display: 'flex',
    gap: 3,
    flexDirection: 'column',
  },
  boxInput: {
    width: {
        lg: '50%',
        md: '100%',
        xs: '100%' 
    },
    position: 'relative',
  },
  iconEdit: {
    position: 'absolute',
    right: 20,
    top: 15,
    cursor: 'pointer',
    opacity: 0.5,
    color: theme.palette.primary.main,
  },
  boxInputPar: {
    display: 'flex',
    gap: 2,
    width: '100%',
    flexDirection: {
      lg: 'row',
      md: 'column',
      xs: 'column'
    },
  },
  iconCamera: {
    position: 'absolute',
    bottom: -5,
    left: 160,
    opacity: 0.5,
    cursor: 'pointer',
  },
};

const stylesForm:CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
};

export {stylesForm, styleSx};
