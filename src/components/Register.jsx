import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const handleOnSubmit = ()=>{
        navigate('/');
    }
    return (
        <div className='register' >
            <h1>Register</h1>
            <form action='' onSubmit={ handleOnSubmit }>
                <input type='text' placeholder='Full Names' name='name' required/>
                <input type='text' placeholder='Username' name='username' required />
                <input type='email' placeholder='Email Address' name='email' required/>
                <input type='password' placeholder='Password' name='password' required/>
                <input type='password' placeholder='Confirm Password' name='confirm password' required/>
                <input className='form-btn' type='submit' value='Register' />
            </form>
        </div>
    );
}

export default Register;