import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const handleOnSubmit = ()=>{
        navigate('/');
    }
    return (
        <div className='login' >
            <h1>Login</h1>
            <form action='' onSubmit={ handleOnSubmit }>
                <input type='text' placeholder='Username' name='username' required/>
                <input type='password' placeholder='Password' name='password' required/>
                <input className='form-btn' type='submit' value='Login' />
            </form>
        </div>
    );
}

export default Login;