import {createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff6b00',
            light: '#fff8ec',
            dark: 'rgba(255,107,0,0.39)'
        },
        secondary: {
            main: '#461704'
        }
    }
});

export {theme};
