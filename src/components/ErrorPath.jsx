import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ErrorPath() {
    return ( 
        <div className='error-container'>
            <h1>Path Error!</h1>
            <p>Invalid Url entered</p>
            <p>Click here to go back to VivaLuxe Webstore <NavLink to='/' >Homepage.</NavLink> </p> 
        </div>
    );
}