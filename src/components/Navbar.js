import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <h1 className='title-logo' >Ndalila Webstore</h1>
            <ul className='tabs'>
                <NavLink to='/' className='nav tab'>Home</NavLink>
                <NavLink to='products' className='nav tab'>Cart</NavLink>
                <NavLink to='about' className='nav tab'>About</NavLink>
                <NavLink to='contact' className='nav tab'>Contact</NavLink>
                <NavLink to='contact' className='nav tab' >Account</NavLink>
            </ul>
        </div>
    );
}

export default Navbar;