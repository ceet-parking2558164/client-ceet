import {ThemeProvider} from '@mui/material';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import {theme} from './theme/theme.ts';
import App from './routes/App.tsx';
import {store} from './redux/store/store.ts';
import './styles/global.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
);
