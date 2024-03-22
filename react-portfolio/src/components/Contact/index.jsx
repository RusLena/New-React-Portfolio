import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './index.scss';

function Contact() {
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <p className='info'>
          I am interested in freelance opportunities. <br />
          If you have any requests or
          questions, <br /> don't hesitate to contact me using the form below.
        </p>
        <h1 className='contact'>Contact me</h1>
      </div>
      <div className="contact-form">
      <Form className='contact-form-form'>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <button type="submit" className="btn btn-primary">Submit</button> {/* Corrected submit button */}
</Form>
      </div>
    </div>
  );
}

export default Contact;
