const styleNavLink = (isActive:boolean) => {
    return {
        color: 'black',
        textDecoration: 'none',
        width: '100%',
        backgroundColor: isActive ? 'rgba(255,248,236,0.21)' : '',
    };
};

export {styleNavLink};
