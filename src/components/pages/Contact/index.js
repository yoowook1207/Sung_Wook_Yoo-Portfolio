import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    
    function handleSubmit(e) {
      e.preventDefault();
      if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
        }
      }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    setErrorMessage('');
                }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }  
    };
    
    return (
        <section>
          <h1>Contact me</h1>
          <div>
              <ul>
                  <li>
                    &#9742;: 703-901-3513
                  </li>
                  <li>
                    &#128231;: yoowook1207@gmail.com
                  </li>
                  
              </ul>
          </div>
          <form id="contact-form" onSubmit={handleSubmit} className='mt-2'>
            <div className='mt-2'>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div className='mt-2'>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} onBlur={handleChange} name="email" placeholder="please put a valid Email address" />
            </div>
            <div className='mt-2'>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
            </div>
              {errorMessage && ( 
                    // same as if(errorMessage) {}
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
              )}
            <button type="submit">Submit</button>
          </form>
        </section>
      )
}
    
export default Contact;