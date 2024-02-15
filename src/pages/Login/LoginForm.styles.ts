import {CSSProperties} from 'react';

interface FormProperties {
    formContainer: CSSProperties
    divEffect: CSSProperties
}

const styleFormLogin:FormProperties = {
    formContainer:{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '30%',
        height: '40%',
        gap: 15,
        borderRadius: 10,
        backgroundColor: '#fff8ec',
        padding: '60px 10px',
        boxShadow: '0 2px 4px rgba(2,2,0,0.5)',
        position: 'relative',
        // zIndex: 2,
    },
    divEffect: {
        width: '100%', height: '100%',
        // zIndex: 1,
        background: 'linear-gradient(160deg, #ff6b00, #ffdea5)',
        position: 'absolute',
        transform: 'rotate(45deg)',
        borderRadius: 10
    }
};

export {styleFormLogin};
