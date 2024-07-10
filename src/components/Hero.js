import React from 'react';

export const scrollToSection = (id) => {
  console.log("scrollToSection");
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {  

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1>Hi, I'm Yasar Arabath S</h1>
                <p>Senior Software Engineer & Web Developer</p>
                <button onClick={() => scrollToSection('skills')}>View My Work</button>
            </div>
        </section>
    );
};

export default Hero;
