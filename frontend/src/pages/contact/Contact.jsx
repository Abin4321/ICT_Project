import React from 'react';
import './contact.css';

export default function App() {
  return (
    <form id='form' className='contact-form'>
      <h2 className='contact-title'>Contact Us</h2>

      <div className='form-group'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input type='text' id='name' className='form-input' />
      </div>

      <div className='form-group'>
        <label htmlFor='email' className='form-label'>
          Email Address
        </label>
        <input type='email' id='email' className='form-input' />
      </div>

      <div className='form-group'>
        <label htmlFor='subject' className='form-label'>
          Subject
        </label>
        <input type='text' id='subject' className='form-input' />
      </div>

      <div className='form-group'>
        <label htmlFor='message' className='form-label'>
          Message
        </label>
        <textarea id='message' className='form-input' rows='4'></textarea>
      </div>

      <div className='form-group form-checkbox'>
        <input type='checkbox' id='sendCopy' className='checkbox-input' />
        <label htmlFor='sendCopy' className='checkbox-label'>
          Send me a copy
        </label>
      </div>

      <button type='submit' className='btn-submit'>
        Send
      </button>
    </form>
  );
}
