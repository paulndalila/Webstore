import React from 'react';
import { NavLink } from 'react-router-dom';

function Message() {

    return (
        <div className='msg'>
            <h1>Message sent successfully!</h1>
            <p>Thank you for reaching out.</p>
            <NavLink to='/'>VivaLuxe Homepage</NavLink>
        </div>
    );
}

export default Message;