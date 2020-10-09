import React from 'react';

const NotFound = () => {
    const notFound = {
        color: 'red',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: '5%',
        padding: '10%',
        boxShadow: '0 0 15px 15px lightgray',
        width: '40%',
        borderRadius: '5px'
    }
    return (
        <div style={notFound}>
            <h3>Sorry Not Found !!!</h3>
            <h3>Please Try Again !!!</h3>
        </div>
    );
};

export default NotFound;
