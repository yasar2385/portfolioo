import React from 'react';
import './Footer.css';

export const scrollToSection = (id) => {
  console.log("scrollToSection");
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Yasar Arabath S</h3>
          <p>Passionate web developer creating innovative and user-friendly solutions.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Yasar Arabath S. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;