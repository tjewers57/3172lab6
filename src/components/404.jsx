import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">
                <button className='custom-btn'>Return to Home Page</button>
            </Link>
        </div>
    );
};

export default PageNotFound;