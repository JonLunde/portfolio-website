import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    const emailBody = { name: name, email: email, message: message };
    event.preventDefault();
    fetch('http://localhost:3002/contact', {
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
      <div className="contact__container">
        <h2 className="contact__title">
          Shoot me an email <a href="">here</a> or fill out the contact form below!
        </h2>
        <form className="contact__form" id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="contact__form-group">
            <input
              id="name"
              type="text"
              className="contact__form-control"
              placeholder="Name"
              value={name}
              onChange={handleOnChange}
            />
            <label className="contact__form-label">Name</label>
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
            <label className="contact__form-label">Email</label>
          </div>
          <div className="contact__form-group">
            <textarea
              id="message"
              className="contact__form-control"
              rows="5"
              placeholder="Message"
              value={message}
              onChange={handleOnChange}
            ></textarea>
            <label className="contact__form-label">Message</label>
          </div>
          <button className="contact__submit btn btn--contact" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
