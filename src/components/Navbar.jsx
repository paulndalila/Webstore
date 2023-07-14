import React, { useState } from 'react';
import '../css/Navbar.scss';
import home from '../images/home.png';
import about from '../images/about.png';
import cart from '../images/cart.png';
import account from '../images/account.png';
import contact from '../images/contact.png';
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    const handleTabClick = () =>{
        setIsActive(!isActive);
    }

    return (
        <div className='navbar'>
            <div className='title-logo'> <img src={ cart } alt='shopping-cart' /> <h1>VivaLuxe Webstore.</h1> </div>
            <ul className={`tabs ${isActive ? 'shrinked' : ''}`}>
                <NavLink to='/' className='nav tab' onClick={ handleTabClick } ><img src={ home } alt='home' />Home</NavLink>
                <NavLink to='cart' className='nav tab' onClick={ handleTabClick }><img src={ cart } alt='cart' />Cart</NavLink>
                <NavLink to='about' className='nav tab' onClick={ handleTabClick }><img src={ about } alt='about' />About</NavLink>
                <NavLink to='contact' className='nav tab' onClick={ handleTabClick }><img src={ contact } alt='contact' />Contact</NavLink>
                <NavLink to='account/' className='nav tab'  onClick={ handleTabClick } ><img src={ account } alt='account' />Account</NavLink>
            </ul>
            
            <div id="hamburger" onClick={ handleClick }>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
           </div>
        </div>
    );
}

export default Navbar;