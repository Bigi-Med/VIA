import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='contact-container'>
                <div className='contact-title-container'>
                <span>Contact Us</span>
                </div>
            <div className='contact-form-container'>
                <form className='contact-form'>
                    <div className='form-group'>
                        <label htmlFor='fullName'>Full Name</label>
                        <input type='text' id='fullName' name='fullName' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='companyName'>Company Name</label>
                        <input type='text' id='companyName' name='companyName' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name='message' rows='4' required></textarea>
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
