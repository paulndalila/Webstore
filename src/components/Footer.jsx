import React from 'react';
import '../css/Navbar.scss';
import { NavLink } from 'react-router-dom';
import whatsapp from '../images/whatsapp.png'
import fb from '../images/fb.png'
import tw from '../images/twitter.png'
import insta from '../images/insta.png'
import mail from '../images/mail.png'
import tele from '../images/telegram.png'

function Footer() {
    return (
        <div className='footer'>

            <div className='social-contacts'>
                <p>Subscribe to our NewsLetter to get updates on new offers and discounts!</p>
                <form>
                    <input type='email' id='email' placeholder='Email Address' required/>
                    <input type='submit' id='sub' value='Subscribe'/>
                </form>
            </div>

            <div className='social-sites'>
                <NavLink to='https://facebook.com' > <img src={ fb } alt=''/> Facebook</NavLink>
                <NavLink to='https://twitter.com' > <img src={ tw } alt=''/> Twitter</NavLink>
                <NavLink to='https://instagram.com' > <img src={ insta } alt=''/> Instagram</NavLink>
            </div>


            <div className='social-groups'>
                <NavLink to='https://facebook.com' > <img src={ whatsapp } alt=''/> WhatsApp Group</NavLink>
                <NavLink to='https://twitter.com' > <img src={ tele } alt=''/> Telegram Group</NavLink>
                <NavLink to='mailto:paulndalila001@gmail.com' > <img src={ mail } alt=''/> Our Email</NavLink>

            </div>
        </div>
    );
}

export default Footer;