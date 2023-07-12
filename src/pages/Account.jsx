import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Account() {
    return (
        <div className='account' >
            <h1>VivaLuxe Webstore Customer Account</h1>
            <div className='forms' >
                <div className='form-nav-tab' >
                    <NavLink className='form-tab' to='/account/' >Login</NavLink>
                    <NavLink className='form-tab' to='register' >Register</NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Account;