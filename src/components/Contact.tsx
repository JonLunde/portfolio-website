/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export default function Contact({ contactRef }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Dispatches email. Form data is POSTed to a AWS Lambda function found in the functions folder.
  function handleSubmit(event) {
    const emailBody = { name, email, message };
    event.preventDefault();
    fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(emailBody),
    })
      .then((res) => res)
      .then((data) => console.log('Working! ', data))
      .catch((error) => console.log('Error... ', error));
  }

  function handleOnChange(event) {
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'message':
        setMessage(event.target.value);
        break;

      default:
        console.log('Switch Error!');
        break;
    }
  }

  return (
    <div className="contact section-container">
      <h2 className="heading-primary contact__title" ref={contactRef}>
        Contact me.
      </h2>
      <div className="contact__container">
        <form className="contact__form" id="contact-form" onSubmit={handleSubmit} method="POST">
          <span className="contact__form-title">
            Shoot me an email{' '}
            <a className="contact__link" href="mailto: jon@lunde.dev">
              here
            </a>{' '}
            or fill out the form below!
          </span>
          <div className="contact__form-group">
            <input
              id="name"
              type="text"
              className="contact__form-control"
              placeholder="Name"
              value={name}
              onChange={handleOnChange}
            />
            <label className="contact__form-label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="contact__form-group">
            <input
              id="email"
              type="email"
              className="contact__form-control"
              placeholder="Email"
              value={email}
              onChange={handleOnChange}
            />
            <label className="contact__form-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="contact__form-group">
            <textarea
              id="message"
              className="contact__form-control"
              rows="5"
              placeholder="Message"
              value={message}
              onChange={handleOnChange}
              autoComplete="nope..."
            />
            <label className="contact__form-label" htmlFor="message">
              Message
            </label>
          </div>
          <button className="contact__submit btn btn--white" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
