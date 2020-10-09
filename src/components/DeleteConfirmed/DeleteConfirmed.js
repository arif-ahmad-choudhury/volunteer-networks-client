import React from 'react';
import { Link } from 'react-router-dom';

const DeleteConfirmed = () => {
    return (
        <div className="text-center my-5">
            <h4>Deleted Successfully!</h4>
            <Link to="/events">Go back to Events Page!</Link>
        </div>
    );
};

export default DeleteConfirmed;