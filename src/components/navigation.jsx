import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <section className='navbar navbar-expand bg-dark'>
            <div className="container">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to="./">
                            <button className='custom-btn'>Home</button>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="./about">
                            <button className='custom-btn'>About</button>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="./projects">
                            <button className='custom-btn'>Projects</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Navigation;