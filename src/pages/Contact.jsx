import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {

    const navigate = useNavigate();
    const handleOnSubmit = () => {
        navigate('/confirmation');
    }

    return (
        <div className='contact' >
            <h1>Contact Us</h1>
            <form action="" onSubmit={ handleOnSubmit }>
                <div id="names">
                    <div class="name field">
                        <label for="firstname">First Name</label>
                        <input type="text" name="firstname" required/>
                    </div>
                    <div class="name field">
                        <label for="lastname">Last Name</label>
                        <input type="text" name="lastname" required/>
                    </div>
                </div>
                
                <div class="email field">
                    <label for="email">Email</label>
                    <input type="email" name="email" required/>
                </div>

                <div class="subject field">
                    <label for="subject">Subject</label>
                    <input type="text" name="subject" required/>
                </div>

                <div class="message">
                    <label for="msg">Type your comments here</label>
                    <textarea name="msg" id="" placeholder="Type your message here..." cols="30" rows="8" required></textarea>
                </div>
                <div class="send">
                    <input type="submit" value="Send message"/>
                </div>
                <p>If you have any inquiries? Send them and we'll answer you as soon as possible</p>
            </form>
        </div>
    );
}

export default Contact;