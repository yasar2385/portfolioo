import React, { useState } from 'react';
import './ContactForm.css';

export const scrollToSection = (id) => {
    console.log("scrollToSection");
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
};


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="developer-info">
          <h2>Developer Information</h2>
          {/* <ul> */}
            <p><strong>Email:</strong> yasar2385@yahoo.in</p>
            <p><strong>Phone:</strong> (044) 4803 6366</p>
            <p><strong>Location:</strong> Chennai, TamilNadu</p>
            <p><strong>GitHub:</strong> <a target="_blank" href="https://github.com/yasar2385">github.com/yasar2385</a></p>
            <p><strong>LinkedIn:</strong> <a  target="_blank" href="https://www.linkedin.com/in/yasar-arabath-6053399a/">yasar-arabath-6053399a</a></p>
          {/* </ul> */}
          <button onClick={() => scrollToSection('hero')} style={{marginTop:'10rem'}}>Goto Top</button> 
        </div>
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className='' style={{marginRight:'5px'}}>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Your name'
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Your mail'
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder='Your message'
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>        
      </div>
      
    </section>
  );
};

export default ContactForm;